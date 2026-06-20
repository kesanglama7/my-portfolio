import { render } from "@react-email/components";
import AutoReplyEmail from "@/lib/emails/auto-reply";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAutoReplyEmail(
  name: string,
  email: string,
  from: string
) {
  try {
    const html = await render(
      AutoReplyEmail({ name })
    );

    await resend.emails.send({
      from: `Kesang Lama <${from}>`,
      to: email,
      subject: "Got your message — Kesang Lama",
      html,
    });

    return { success: true };
  } catch (error) {
    console.error("Auto-reply email failed:", error);
    return { success: false };
  }
}
