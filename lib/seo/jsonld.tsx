export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kesang Lama",
    url: "https://www.kesanglama.com.np",
    jobTitle: "Multidisciplinary Designer & Full-Stack Developer",
    sameAs: [
      "https://www.instagram.com/nonee_ee_1/",
      "https://www.facebook.com/kesang.lama.851681/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
