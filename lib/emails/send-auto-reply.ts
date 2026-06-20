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










// import { render } from "@react-email/components";
// import AutoReplyEmail from "@/lib/emails/auto-reply";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendAutoReplyEmail(
//   name: string,
//   email: string,
//   from: string
// ) {
//   try {
//     const html = await render(<AutoReplyEmail name={name} />, {
//       pretty: true,
//     });

//     const text = [
//       `Hey ${name || "there"},`,
//       "",
//       "Your message has reached my inbox successfully.",
//       "",
//       "Thanks for reaching out through my portfolio. I'll review your message carefully and reply personally as soon as I can.",
//       "",
//       "I usually reply within 24–48 hours. If it's urgent, you can reply directly to this email and I'll prioritize it.",
//       "",
//       "Talk soon,",
//       "Kesang Lama",
//       "Frontend Developer · Next.js · React · Product Interfaces",
//       "",
//       "Portfolio: https://kesanglama.com.np",
//       "GitHub: https://github.com/kesanglama7",
//     ].join("\n");

//     await resend.emails.send({
//       from: `Kesang Lama <${from}>`,
//       to: email,
//       subject: "Signal received — Kesang Lama",
//       html,
//       text,
//     });

//     return { success: true };
//   } catch (error) {
//     console.error("Auto-reply email failed:", error);
//     return { success: false };
//   }
// }
