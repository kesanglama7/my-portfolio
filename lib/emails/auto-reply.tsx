"use client";

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
  const safeName = name?.trim() || "there";

  return (
    <Html>
      <Head />
      <Preview>
        Your message reached Kesang Lama — I&apos;ll get back to you soon.
      </Preview>

      <Body style={main}>
        <Container style={container}>
          {/* Top signal line */}
          <Section style={topBar}>
            <Text style={systemLabel}>MESSAGE RECEIVED</Text>
            <Text style={referenceText}>PORTFOLIO CONTACT · AUTO REPLY</Text>
          </Section>

          {/* Hero */}
          <Section style={heroSection}>
            <div style={signalDot} />

            <Heading style={heading}>Hey {safeName},</Heading>

            <Text style={introText}>
              Your message has reached my inbox successfully.
            </Text>

            <Text style={bodyText}>
              Thanks for reaching out through my portfolio. I&apos;ll review your
              message carefully and reply personally as soon as I can.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Status Card */}
          <Section style={statusCard}>
            <Text style={statusEyebrow}>CURRENT STATUS</Text>

            <Text style={statusTitle}>Signal received. Response pending.</Text>

            <Text style={statusBody}>
              I usually reply within <strong>24–48 hours</strong>. If the
              message is urgent, you can reply directly to this email and I&apos;ll
              prioritize it.
            </Text>
          </Section>

          {/* Next Steps */}
          <Section style={stepsSection}>
            <Text style={sectionLabel}>WHAT HAPPENS NEXT</Text>

            <div style={stepRow}>
              <span style={stepNumber}>01</span>
              <Text style={stepText}>I&apos;ll review your project details.</Text>
            </div>

            <div style={stepRow}>
              <span style={stepNumber}>02</span>
              <Text style={stepText}>You&apos;ll get a personal reply from me.</Text>
            </div>

            <div style={stepRow}>
              <span style={stepNumber}>03</span>
              <Text style={stepText}>
                We&apos;ll see how we can build something useful together.
              </Text>
            </div>
          </Section>

          <Hr style={divider} />

          {/* Signature */}
          <Section style={signatureSection}>
            <Text style={signoff}>Talk soon,</Text>

            <Text style={signatureName}>Kesang Lama</Text>

            <Text style={signatureRole}>
              Frontend Developer · Next.js · React · Product Interfaces
            </Text>

            <Section style={linkSection}>
              <Link href="https://kesanglama.com.np" style={primaryLink}>
                View Portfolio
              </Link>

              <Link href="https://github.com/kesanglama7" style={secondaryLink}>
                GitHub
              </Link>
            </Section>
          </Section>

          <Text style={footerText}>
            This is an automated confirmation email, but the next reply will be
            written by me.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ============================================================
   DARK CINEMATIC EMAIL THEME
   Matches the new black contact section:
   black base · soft borders · signal dot · clean portfolio style
   ============================================================ */

const main = {
  margin: "0",
  padding: "48px 18px",
  backgroundColor: "#030303",
  backgroundImage:
    "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.09), transparent 32%), radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
  backgroundSize: "100% 100%, 24px 24px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
};

const container = {
  width: "100%",
  maxWidth: "620px",
  margin: "0 auto",
  backgroundColor: "#080808",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "28px",
  overflow: "hidden",
  boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
};

const topBar = {
  padding: "22px 28px",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  backgroundColor: "#0c0c0c",
};

const systemLabel = {
  margin: "0 0 6px",
  color: "#f5f5f5",
  fontSize: "11px",
  fontWeight: "800",
  letterSpacing: "0.28em",
  textTransform: "uppercase" as const,
};

const referenceText = {
  margin: "0",
  color: "rgba(245,245,245,0.42)",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
};

const heroSection = {
  padding: "44px 34px 28px",
  textAlign: "left" as const,
};

const signalDot = {
  width: "14px",
  height: "14px",
  borderRadius: "999px",
  backgroundColor: "#f5f5f5",
  boxShadow:
    "0 0 0 8px rgba(255,255,255,0.06), 0 0 34px rgba(255,255,255,0.55)",
  marginBottom: "30px",
};

const heading = {
  margin: "0 0 14px",
  color: "#ffffff",
  fontSize: "42px",
  lineHeight: "0.95",
  fontWeight: "900",
  letterSpacing: "-0.055em",
  textTransform: "uppercase" as const,
};

const introText = {
  margin: "0 0 20px",
  color: "rgba(255,255,255,0.78)",
  fontSize: "18px",
  lineHeight: "1.55",
  fontWeight: "600",
};

const bodyText = {
  margin: "0",
  color: "rgba(255,255,255,0.58)",
  fontSize: "15px",
  lineHeight: "1.8",
  fontWeight: "400",
};

const divider = {
  border: "none",
  borderTop: "1px solid rgba(255,255,255,0.1)",
  margin: "0",
};

const statusCard = {
  margin: "28px 28px",
  padding: "24px",
  backgroundColor: "#111111",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "22px",
};

const statusEyebrow = {
  margin: "0 0 10px",
  color: "rgba(255,255,255,0.4)",
  fontSize: "10px",
  fontWeight: "800",
  letterSpacing: "0.24em",
  textTransform: "uppercase" as const,
};

const statusTitle = {
  margin: "0 0 10px",
  color: "#ffffff",
  fontSize: "22px",
  lineHeight: "1.15",
  fontWeight: "850",
  letterSpacing: "-0.035em",
};

const statusBody = {
  margin: "0",
  color: "rgba(255,255,255,0.62)",
  fontSize: "14px",
  lineHeight: "1.75",
};

const stepsSection = {
  padding: "8px 28px 32px",
};

const sectionLabel = {
  margin: "0 0 18px",
  color: "rgba(255,255,255,0.42)",
  fontSize: "10px",
  fontWeight: "800",
  letterSpacing: "0.26em",
  textTransform: "uppercase" as const,
};

const stepRow = {
  display: "flex",
  alignItems: "flex-start",
  gap: "14px",
  padding: "15px 0",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const stepNumber = {
  display: "inline-block",
  minWidth: "32px",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "900",
  letterSpacing: "0.12em",
};

const stepText = {
  margin: "0",
  color: "rgba(255,255,255,0.68)",
  fontSize: "14px",
  lineHeight: "1.65",
};

const signatureSection = {
  padding: "30px 28px 34px",
};

const signoff = {
  margin: "0 0 6px",
  color: "rgba(255,255,255,0.48)",
  fontSize: "14px",
  lineHeight: "1.5",
};

const signatureName = {
  margin: "0 0 4px",
  color: "#ffffff",
  fontSize: "26px",
  fontWeight: "900",
  letterSpacing: "-0.04em",
};

const signatureRole = {
  margin: "0 0 24px",
  color: "rgba(255,255,255,0.5)",
  fontSize: "13px",
  lineHeight: "1.65",
};

const linkSection = {
  display: "flex",
  gap: "12px",
};

const primaryLink = {
  display: "inline-block",
  padding: "12px 18px",
  backgroundColor: "#ffffff",
  color: "#050505",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "900",
  letterSpacing: "0.1em",
  textDecoration: "none",
  textTransform: "uppercase" as const,
};

const secondaryLink = {
  display: "inline-block",
  padding: "12px 18px",
  backgroundColor: "transparent",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "900",
  letterSpacing: "0.1em",
  textDecoration: "none",
  textTransform: "uppercase" as const,
};

const footerText = {
  margin: "0",
  padding: "0 28px 30px",
  color: "rgba(255,255,255,0.34)",
  fontSize: "12px",
  lineHeight: "1.7",
  textAlign: "center" as const,
};
