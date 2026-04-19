// import {
//   Body,
//   Container,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Link,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";

// type AutoReplyProps = {
//   name: string;
// };

// export default function AutoReplyEmail({ name }: AutoReplyProps) {
//   return (
//     <Html>
//       <Head />
//       <Preview>Thanks for reaching out! I'll get back to you soon — Kesang Lama</Preview>

//       <Body style={main}>
//         <Container style={card}>
//           {/* Accent bar */}
//           <div style={accentBar} />

//           {/* Header */}
//           <Section>
//             <Text style={eyebrow}>Auto-Reply</Text>
//             <Heading style={heading}>Message Received ✓</Heading>
//           </Section>

//           {/* Body */}
//           <Section>
//             <Text style={text}>Hi {name},</Text>

//             <Text style={text}>
//               Thanks for getting in touch! Your message has landed safely in my inbox, 
//               and I'll review it carefully.
//             </Text>

//             <Text style={text}>
//               I typically respond within 24–48 hours. If your inquiry is urgent or 
//               you'd like to share additional context, feel free to reply directly to this email.
//             </Text>
//           </Section>

//           {/* What's Next */}
//           <Section style={nextSteps}>
//             <Text style={nextStepsTitle}>What happens next?</Text>
//             <Text style={nextStepsText}>
//               • I'll review your message and project details<br />
//               • You'll receive a personalized response soon<br />
//               • We can discuss next steps if it's a good fit
//             </Text>
//           </Section>

//           <Hr style={hr} />

//           {/* Footer */}
//           <Section>
//             <Text style={signature}>
//               Best regards,<br />
//               <strong style={name_style}>Kesang Lama</strong>
//             </Text>
            
//             <Text style={footer}>
//               Frontend Developer · Next.js Specialist<br />
//               <Link href="https://kesanglama.com.np" style={link}>
//                 kesanglama.com.np
//               </Link>
//               {" · "}
//               <Link href="https://github.com/kesanglama" style={link}>
//                 GitHub
//               </Link>
//             </Text>

//             <Text style={disclaimer}>
//               This is an automated confirmation. Your original message is being processed 
//               and you'll hear from me personally soon.
//             </Text>
//           </Section>
//         </Container>

//         {/* Trust footer */}
//         <Text style={trustFooter}>
//           Sent via automated response system
//         </Text>
//       </Body>
//     </Html>
//   );
// }

// /* ---------- Styles ---------- */

// const main = {
//   backgroundColor: "#f3f4f6",
//   fontFamily:
//     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", Helvetica, Arial, sans-serif',
//   padding: "40px 20px",
// };

// const card = {
//   backgroundColor: "#ffffff",
//   margin: "0 auto",
//   padding: "0",
//   maxWidth: "600px",
//   borderRadius: "16px",
//   boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
//   overflow: "hidden",
// };

// const accentBar = {
//   height: "4px",
//   background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
// };

// const eyebrow = {
//   fontSize: "11px",
//   letterSpacing: "0.1em",
//   textTransform: "uppercase" as const,
//   color: "#8b5cf6",
//   fontWeight: "600",
//   marginBottom: "8px",
//   marginTop: "32px",
//   paddingLeft: "32px",
//   paddingRight: "32px",
// };

// const heading = {
//   fontSize: "28px",
//   fontWeight: "700",
//   color: "#111827",
//   margin: "0 0 24px",
//   paddingLeft: "32px",
//   paddingRight: "32px",
//   letterSpacing: "-0.02em",
// };

// const text = {
//   fontSize: "16px",
//   lineHeight: "1.7",
//   color: "#374151",
//   marginBottom: "16px",
//   paddingLeft: "32px",
//   paddingRight: "32px",
// };

// const infoGrid = {
//   display: "flex",
//   gap: "12px",
//   marginTop: "24px",
//   marginBottom: "24px",
//   paddingLeft: "32px",
//   paddingRight: "32px",
// };

// const infoCard = {
//   flex: "1",
//   padding: "16px",
//   backgroundColor: "#f9fafb",
//   borderRadius: "12px",
//   border: "1px solid #e5e7eb",
//   textAlign: "center" as const,
// };

// const infoLabel = {
//   fontSize: "12px",
//   color: "#6b7280",
//   textTransform: "uppercase" as const,
//   letterSpacing: "0.05em",
//   fontWeight: "600",
//   margin: "0 0 6px",
// };

// const infoValue = {
//   fontSize: "16px",
//   color: "#111827",
//   fontWeight: "600",
//   margin: "0",
// };

// const nextSteps = {
//   marginTop: "24px",
//   padding: "20px 24px",
//   backgroundColor: "#eff6ff",
//   borderLeft: "3px solid #3b82f6",
//   marginLeft: "32px",
//   marginRight: "32px",
//   borderRadius: "8px",
// };

// const nextStepsTitle = {
//   fontSize: "14px",
//   fontWeight: "600",
//   color: "#1e40af",
//   margin: "0 0 10px",
//   textTransform: "uppercase" as const,
//   letterSpacing: "0.05em",
// };

// const nextStepsText = {
//   fontSize: "14px",
//   lineHeight: "1.8",
//   color: "#1e3a8a",
//   margin: "0",
// };

// const hr = {
//   border: "none",
//   borderTop: "1px solid #e5e7eb",
//   margin: "32px 32px",
// };

// const signature = {
//   fontSize: "15px",
//   lineHeight: "1.6",
//   color: "#4b5563",
//   marginBottom: "8px",
//   paddingLeft: "32px",
//   paddingRight: "32px",
// };

// const name_style = {
//   color: "#111827",
//   fontSize: "16px",
// };

// const footer = {
//   fontSize: "14px",
//   lineHeight: "1.7",
//   color: "#6b7280",
//   marginBottom: "16px",
//   paddingLeft: "32px",
//   paddingRight: "32px",
// };

// const link = {
//   color: "#3b82f6",
//   textDecoration: "none",
//   fontWeight: "500",
// };

// const disclaimer = {
//   fontSize: "13px",
//   color: "#9ca3af",
//   lineHeight: "1.6",
//   paddingLeft: "32px",
//   paddingRight: "32px",
//   paddingBottom: "32px",
// };

// const trustFooter = {
//   textAlign: "center" as const,
//   fontSize: "12px",
//   color: "#9ca3af",
//   marginTop: "24px",
// };



//new
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type AutoReplyProps = {
  name: string;
};

export default function AutoReplyEmail({ name }: AutoReplyProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Patrick+Hand&display=swap');
        `}</style>
      </Head>
      <Preview>Thanks for reaching out! I&apos;ll get back to you soon — Kesang Lama</Preview>

      <Body style={main}>

        {/* Outer wrapper — simulates paper sheet with dot texture */}
        <Container style={outerWrap}>

          {/* === TAPE STRIP (decorative header element) === */}
          <div style={tapeStrip} />

          {/* === HEADER BADGE === */}
          <Section style={{ textAlign: "center", paddingTop: "36px", paddingBottom: "0px" }}>
            <div style={thumtackWrapper}>
              <div style={thumbtack} />
            </div>
            <div style={receivedBadge}>
              <span style={badgeText}>✓ message received!</span>
            </div>
          </Section>

          {/* === MAIN CARD === */}
          <div style={mainCard}>

            {/* Heading */}
            <Heading style={heading}>
              Hey {name}! 👋
            </Heading>

            <Text style={subheading}>
              your message landed safely.
            </Text>

            <Hr style={dashedDivider} />

            {/* Body text */}
            <Text style={bodyText}>
              Thanks so much for getting in touch — I&apos;ve got your message and I'm
              already looking forward to reading it carefully.
            </Text>

            <Text style={bodyText}>
              I typically write back within <span style={highlightRed}>24–48 hours</span>.
              If it&apos;s urgent, just reply directly to this email and I&apos;ll prioritise it.
            </Text>

            {/* === STICKY NOTE (What's Next) === */}
            <div style={stickyNote}>
              <Text style={stickyNoteTitle}>📋 what happens next?</Text>
              <Text style={stickyNoteItem}>→ I&apos;ll review your message &amp; details</Text>
              <Text style={stickyNoteItem}>→ You&apos;ll get a personal reply from me</Text>
              <Text style={stickyNoteItem}>→ We&apos;ll figure out if it&apos;s a great fit!</Text>
            </div>

            <Hr style={dashedDivider} />

            {/* === SIGNATURE SECTION === */}
            <Section style={{ paddingTop: "8px" }}>
              <Text style={signoffText}>
                Talk soon,
              </Text>
              <Text style={signatureName}>
                Kesang Lama
              </Text>
              <Text style={signatureRole}>
                Frontend Developer · Next.js Specialist
              </Text>

              {/* === LINK BUTTONS === */}
              <div style={linkRow}>
                <Link href="https://kesanglama.com.np" style={linkButton}>
                  🌐 portfolio
                </Link>
                <Link href="https://github.com/kesanglama7" style={linkButton}>
                  ⌥ github
                </Link>
              </div>
            </Section>
          </div>

          {/* === FOOTER SCRIBBLE === */}
          <Text style={footerNote}>
            ~ this is an automated reply, but a real human will follow up soon ~
          </Text>

        </Container>
      </Body>
    </Html>
  );
}

/* ============================================================
   STYLES — Hand-Drawn Theme
   Colors: #fdfbf7 paper · #2d2d2d pencil · #ff4d4d marker · #2d5da1 ink
   Fonts:  Kalam (headings) · Patrick Hand (body)
   ============================================================ */

const PAPER   = "#fdfbf7";
const PENCIL  = "#2d2d2d";
const MARKER  = "#ff4d4d";
const INK     = "#2d5da1";
const MUTED   = "#e5e0d8";
const POSTIT  = "#fff9c4";

const main = {
  backgroundColor: "#e5e0d8",
  backgroundImage: "radial-gradient(#c8c2b8 1px, transparent 1px)",
  backgroundSize: "24px 24px",
  padding: "48px 20px",
  fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif",
};

/* Outer paper sheet */
const outerWrap = {
  maxWidth: "580px",
  margin: "0 auto",
  backgroundColor: PAPER,
  border: `3px solid ${PENCIL}`,
  borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  boxShadow: `8px 8px 0px 0px ${PENCIL}`,
  overflow: "hidden",
  position: "relative" as const,
};

/* Tape strip at top */
const tapeStrip = {
  position: "absolute" as const,
  top: "-6px",
  left: "50%",
  transform: "translateX(-50%) rotate(-1deg)",
  width: "120px",
  height: "28px",
  backgroundColor: "rgba(45,45,45,0.12)",
  border: `2px solid rgba(45,45,45,0.25)`,
  borderRadius: "4px 6px 5px 3px",
};

/* Red thumbtack */
const thumtackWrapper = {
  display: "flex" as const,
  justifyContent: "center",
  marginBottom: "8px",
};

const thumbtack = {
  width: "18px",
  height: "18px",
  backgroundColor: MARKER,
  border: `3px solid ${PENCIL}`,
  borderRadius: "50%",
  boxShadow: `2px 2px 0px 0px ${PENCIL}`,
  display: "inline-block",
};

/* "Message received" badge */
const receivedBadge = {
  display: "inline-block",
  backgroundColor: POSTIT,
  border: `3px solid ${PENCIL}`,
  borderRadius: "255px 10px 200px 10px / 10px 200px 10px 255px",
  boxShadow: `4px 4px 0px 0px ${PENCIL}`,
  padding: "6px 20px",
  transform: "rotate(-1deg)",
  marginBottom: "16px",
};

const badgeText = {
  fontFamily: "'Patrick Hand', cursive, sans-serif",
  fontSize: "14px",
  color: PENCIL,
  fontWeight: "700",
  letterSpacing: "0.03em",
};

/* Main white card */
const mainCard = {
  margin: "12px 28px 24px",
  backgroundColor: "#ffffff",
  border: `3px solid ${PENCIL}`,
  borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px",
  boxShadow: `5px 5px 0px 0px ${PENCIL}`,
  padding: "28px 28px 20px",
};

const heading = {
  fontFamily: "'Kalam', 'Comic Sans MS', cursive",
  fontSize: "32px",
  fontWeight: "700",
  color: PENCIL,
  margin: "0 0 4px",
  lineHeight: "1.2",
};

const subheading = {
  fontFamily: "'Patrick Hand', cursive, sans-serif",
  fontSize: "16px",
  color: `${PENCIL}99`,
  margin: "0 0 16px",
  fontStyle: "italic",
};

const dashedDivider = {
  border: "none",
  borderTop: `2px dashed ${MUTED}`,
  margin: "18px 0",
};

const bodyText = {
  fontFamily: "'Patrick Hand', cursive, sans-serif",
  fontSize: "16px",
  lineHeight: "1.75",
  color: PENCIL,
  margin: "0 0 14px",
};

const highlightRed = {
  color: MARKER,
  fontWeight: "700",
  textDecoration: "underline",
};

/* Post-it sticky note */
const stickyNote = {
  backgroundColor: POSTIT,
  border: `3px solid ${PENCIL}`,
  borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  boxShadow: `4px 4px 0px 0px ${PENCIL}`,
  padding: "16px 20px 12px",
  margin: "18px 0",
  transform: "rotate(0.5deg)",
};

const stickyNoteTitle = {
  fontFamily: "'Kalam', 'Comic Sans MS', cursive",
  fontSize: "15px",
  fontWeight: "700",
  color: PENCIL,
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const stickyNoteItem = {
  fontFamily: "'Patrick Hand', cursive, sans-serif",
  fontSize: "15px",
  lineHeight: "1.7",
  color: PENCIL,
  margin: "0 0 4px",
};

/* Signature */
const signoffText = {
  fontFamily: "'Patrick Hand', cursive, sans-serif",
  fontSize: "15px",
  color: `${PENCIL}99`,
  margin: "0 0 2px",
  fontStyle: "italic",
};

const signatureName = {
  fontFamily: "'Kalam', 'Comic Sans MS', cursive",
  fontSize: "26px",
  fontWeight: "700",
  color: PENCIL,
  margin: "0 0 2px",
};

const signatureRole = {
  fontFamily: "'Patrick Hand', cursive, sans-serif",
  fontSize: "13px",
  color: `${PENCIL}80`,
  margin: "0 0 16px",
};

/* Link buttons */
const linkRow = {
  display: "flex" as const,
  gap: "12px",
  flexWrap: "wrap" as const,
};

const linkButton = {
  fontFamily: "'Patrick Hand', cursive, sans-serif",
  fontSize: "14px",
  color: PENCIL,
  backgroundColor: PAPER,
  border: `2px solid ${PENCIL}`,
  borderRadius: "255px 10px 225px 10px / 10px 200px 10px 255px",
  boxShadow: `3px 3px 0px 0px ${PENCIL}`,
  padding: "6px 16px",
  textDecoration: "none",
  display: "inline-block",
};

/* Footer scribble */
const footerNote = {
  fontFamily: "'Patrick Hand', cursive, sans-serif",
  fontSize: "12px",
  color: `${PENCIL}60`,
  textAlign: "center" as const,
  padding: "0 28px 24px",
  margin: "0",
  fontStyle: "italic",
};