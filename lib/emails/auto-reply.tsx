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
      <Head />
      <Preview>Thanks for reaching out! I'll get back to you soon — Kesang Lama</Preview>

      <Body style={main}>
        <Container style={card}>
          {/* Accent bar */}
          <div style={accentBar} />

          {/* Header */}
          <Section>
            <Text style={eyebrow}>Auto-Reply</Text>
            <Heading style={heading}>Message Received ✓</Heading>
          </Section>

          {/* Body */}
          <Section>
            <Text style={text}>Hi {name},</Text>

            <Text style={text}>
              Thanks for getting in touch! Your message has landed safely in my inbox, 
              and I'll review it carefully.
            </Text>

            <Text style={text}>
              I typically respond within 24–48 hours. If your inquiry is urgent or 
              you'd like to share additional context, feel free to reply directly to this email.
            </Text>
          </Section>

          {/* What's Next */}
          <Section style={nextSteps}>
            <Text style={nextStepsTitle}>What happens next?</Text>
            <Text style={nextStepsText}>
              • I'll review your message and project details<br />
              • You'll receive a personalized response soon<br />
              • We can discuss next steps if it's a good fit
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section>
            <Text style={signature}>
              Best regards,<br />
              <strong style={name_style}>Kesang Lama</strong>
            </Text>
            
            <Text style={footer}>
              Frontend Developer · Next.js Specialist<br />
              <Link href="https://kesanglama.com.np" style={link}>
                kesanglama.com.np
              </Link>
              {" · "}
              <Link href="https://github.com/kesanglama" style={link}>
                GitHub
              </Link>
            </Text>

            <Text style={disclaimer}>
              This is an automated confirmation. Your original message is being processed 
              and you'll hear from me personally soon.
            </Text>
          </Section>
        </Container>

        {/* Trust footer */}
        <Text style={trustFooter}>
          Sent via automated response system
        </Text>
      </Body>
    </Html>
  );
}

/* ---------- Styles ---------- */

const main = {
  backgroundColor: "#f3f4f6",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", Helvetica, Arial, sans-serif',
  padding: "40px 20px",
};

const card = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  borderRadius: "16px",
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
  overflow: "hidden",
};

const accentBar = {
  height: "4px",
  background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
};

const eyebrow = {
  fontSize: "11px",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#8b5cf6",
  fontWeight: "600",
  marginBottom: "8px",
  marginTop: "32px",
  paddingLeft: "32px",
  paddingRight: "32px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#111827",
  margin: "0 0 24px",
  paddingLeft: "32px",
  paddingRight: "32px",
  letterSpacing: "-0.02em",
};

const text = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#374151",
  marginBottom: "16px",
  paddingLeft: "32px",
  paddingRight: "32px",
};

const infoGrid = {
  display: "flex",
  gap: "12px",
  marginTop: "24px",
  marginBottom: "24px",
  paddingLeft: "32px",
  paddingRight: "32px",
};

const infoCard = {
  flex: "1",
  padding: "16px",
  backgroundColor: "#f9fafb",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  textAlign: "center" as const,
};

const infoLabel = {
  fontSize: "12px",
  color: "#6b7280",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  fontWeight: "600",
  margin: "0 0 6px",
};

const infoValue = {
  fontSize: "16px",
  color: "#111827",
  fontWeight: "600",
  margin: "0",
};

const nextSteps = {
  marginTop: "24px",
  padding: "20px 24px",
  backgroundColor: "#eff6ff",
  borderLeft: "3px solid #3b82f6",
  marginLeft: "32px",
  marginRight: "32px",
  borderRadius: "8px",
};

const nextStepsTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1e40af",
  margin: "0 0 10px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const nextStepsText = {
  fontSize: "14px",
  lineHeight: "1.8",
  color: "#1e3a8a",
  margin: "0",
};

const hr = {
  border: "none",
  borderTop: "1px solid #e5e7eb",
  margin: "32px 32px",
};

const signature = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#4b5563",
  marginBottom: "8px",
  paddingLeft: "32px",
  paddingRight: "32px",
};

const name_style = {
  color: "#111827",
  fontSize: "16px",
};

const footer = {
  fontSize: "14px",
  lineHeight: "1.7",
  color: "#6b7280",
  marginBottom: "16px",
  paddingLeft: "32px",
  paddingRight: "32px",
};

const link = {
  color: "#3b82f6",
  textDecoration: "none",
  fontWeight: "500",
};

const disclaimer = {
  fontSize: "13px",
  color: "#9ca3af",
  lineHeight: "1.6",
  paddingLeft: "32px",
  paddingRight: "32px",
  paddingBottom: "32px",
};

const trustFooter = {
  textAlign: "center" as const,
  fontSize: "12px",
  color: "#9ca3af",
  marginTop: "24px",
};