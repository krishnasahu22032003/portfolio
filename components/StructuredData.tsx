export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krishna Sahu",
    url: "https://krishnastack.com",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/krishnasahu22032003",
      "https://www.linkedin.com/in/krishnasahu22/",
      "https://x.com/krishnasahu2203"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}