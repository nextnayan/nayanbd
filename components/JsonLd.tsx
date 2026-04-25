export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.nayanbd.com/#person",
        name: "Nayan Sarkar",
        url: "https://www.nayanbd.com/",
        image: "https://www.nayanbd.com/nayan_sarkar.png",
        jobTitle: "Full Stack Developer",
        sameAs: [
          "https://github.com/nayansarkar",
          "https://linkedin.com/in/nayansarkar",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "Python",
          "Django",
          "JavaScript",
          "TypeScript",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nayanbd.com/#website",
        url: "https://www.nayanbd.com/",
        name: "Nayan Sarkar Portfolio",
        description:
          "Portfolio website of Nayan Sarkar, a full stack web developer.",
        inLanguage: "en",
        author: {
          "@id": "https://www.nayanbd.com/#person",
        },
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.nayanbd.com/#portfolio",
        url: "https://www.nayanbd.com/",
        name: "Nayan Sarkar Full Stack Developer Portfolio",
        description:
          "Portfolio page showcasing Nayan Sarkar's projects, technical skills, and development expertise.",
        isPartOf: {
          "@id": "https://www.nayanbd.com/#website",
        },
        about: {
          "@id": "https://www.nayanbd.com/#person",
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://www.nayanbd.com/calculator#webapp",
        name: "Nayan Sarkar Tools & Calculators",
        url: "https://www.nayanbd.com/calculator",
        applicationCategory: "UtilitiesApplication",
        description:
          "A suite of online calculators including EMI, Age, and Unit Converters.",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
