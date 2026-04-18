import { PortfolioApp } from "@/components/portfolio-app";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Danila Sergejevič Anikin",
    alternateName: "Danila Sergejevič Anikin",
    jobTitle: [
      "Software Developer",
      "AI Software Engineer",
      "Linux Admin",
      "AI Specialist",
      "DevOps Engineer",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Prague",
      addressCountry: "CZ",
    },
    url: "https://danila-sergejevic-anikin-portfolio.vercel.app",
    sameAs: [
      "https://github.com/DanilaAnikin",
      "https://linkedin.com/danila-anikin",
      "https://instagram.com/danila.s.anikin",
    ],
    email: "mailto:danila.s.anikin@gmail.com",
    knowsAbout: [
      "AI Engineering",
      "Automation",
      "Software Engineering",
      "Linux Administration",
      "DevOps",
      "Next.js",
      "TypeScript",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioApp />
    </>
  );
}
