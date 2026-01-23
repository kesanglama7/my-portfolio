import { sendAutoReplyEmail } from "@/lib/emails/send-auto-reply";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// ===== Rate limit config =====
const RATE_LIMIT_WINDOW = 60_000; // 60 seconds
const rateLimitMap = new Map<string, number>();

function isRateLimited(ip: string) {
  const lastTime = rateLimitMap.get(ip);
  const now = Date.now();

  if (lastTime && now - lastTime < RATE_LIMIT_WINDOW) {
    return true;
  }

  rateLimitMap.set(ip, now);
  return false;
}
// =============================

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  message: z.string().min(10).max(2000),
  company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { ok: false, message: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const json = await req.json();
    const parsed = ContactSchema.safeParse(json);

    if (!parsed.success) {
      return Response.json(
        { ok: false, message: "Invalid form data." },
        { status: 400 }
      );
    }

    const { name, email, message, company } = parsed.data;

    // Honeypot → silent success
    if (company && company.trim().length > 0) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return Response.json(
        { ok: false, message: "Email not configured." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: `Kesang Lama <${from}>`,
      to,
      replyTo: email,
      subject: `Portfolio Contact — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });


    // Auto-reply to the user (React Email)
    await sendAutoReplyEmail(name, email, from);

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json(
      { ok: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
