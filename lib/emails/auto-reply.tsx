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
      <Preview>Thank you for reaching out. I will get back to you soon.</Preview>

      <Body style={main}>
        <Container style={container}>
          
          {/* === HEADING === */}
          <Heading style={heading}>
            Hello {name},
          </Heading>

          {/* === BODY TEXT === */}
          <Text style={text}>
            Thank you for getting in touch. This is an automated response to confirm that your message has been successfully received.
          </Text>

          <Text style={text}>
            I am currently reviewing your inquiry and will get back to you within <span style={highlight}>24–48 hours</span>. If your request is urgent, please reply directly to this email and I will prioritize it accordingly.
          </Text>

          {/* === NEXT STEPS (Optional Professional List) === */}
          <Section style={listContainer}>
            <Text style={listTitle}>What to expect next:</Text>
            <ul style={list}>
              <li style={listItem}>I will review your message and project details.</li>
              <li style={listItem}>You will receive a personalized response from me.</li>
              <li style={listItem}>We will determine the best next steps for moving forward.</li>
            </ul>
          </Section>

          <Hr style={divider} />

          {/* === SIGNATURE SECTION === */}
          <Section style={signatureContainer}>
            <Text style={signoffText}>Best regards,</Text>
            <Text style={signatureName}>Kesang Lama</Text>
            <Text style={signatureRole}>Frontend Developer · Next.js Specialist</Text>

            {/* === LINK BUTTONS === */}
            <Section style={linkRow}>
              <Link href="https://kesanglama.com.np" style={link}>
                Portfolio
              </Link>
              <span style={linkSeparator}>|</span>
              <Link href="https://github.com/kesanglama7" style={link}>
                GitHub
              </Link>
            </Section>
          </Section>

        </Container>

        {/* === FOOTER === */}
        <Text style={footerText}>
          This is an automated message. Please do not reply unless you have additional urgent information to add.
        </Text>
      </Body>
    </Html>
  );
}

/* ============================================================
   STYLES — Clean & Professional Corporate Theme
   ============================================================ */

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px",
  borderRadius: "8px",
  border: "1px solid #eaeaea",
  maxWidth: "600px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#333333",
  margin: "0 0 24px",
};

const text = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#555555",
  margin: "0 0 16px",
};

const highlight = {
  fontWeight: "600",
  color: "#333333",
};

const listContainer = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "6px",
  margin: "24px 0",
};

const listTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#333333",
  margin: "0 0 12px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const list = {
  margin: "0",
  padding: "0 0 0 20px",
  color: "#555555",
};

const listItem = {
  fontSize: "15px",
  lineHeight: "1.6",
  marginBottom: "8px",
};

const divider = {
  borderTop: "1px solid #eaeaea",
  margin: "32px 0",
};

const signatureContainer = {
  marginTop: "8px",
};

const signoffText = {
  fontSize: "16px",
  color: "#555555",
  margin: "0 0 8px",
};

const signatureName = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#333333",
  margin: "0 0 4px",
};

const signatureRole = {
  fontSize: "14px",
  color: "#666666",
  margin: "0 0 16px",
};

const linkRow = {
  marginTop: "16px",
};

const link = {
  fontSize: "14px",
  color: "#0066cc",
  textDecoration: "none",
  fontWeight: "500",
};

const linkSeparator = {
  color: "#eaeaea",
  margin: "0 12px",
};

const footerText = {
  fontSize: "12px",
  color: "#8898aa",
  textAlign: "center" as const,
  marginTop: "24px",
  padding: "0 20px",
};