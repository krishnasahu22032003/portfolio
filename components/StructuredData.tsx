export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krishna Sahu",
    url: "https://krishnastack.com",
    image: "https://krishnastack.com/og-image.png",
    jobTitle: "Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, Node.js, TypeScript, AWS, and DevOps.",
    sameAs: [
      "https://github.com/krishnasahu22032003",
      "https://www.linkedin.com/in/krishnasahu22/",
      "https://x.com/krishnasahu2203",
      "https://medium.com/@krishnasahu2203"
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "DevOps"
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