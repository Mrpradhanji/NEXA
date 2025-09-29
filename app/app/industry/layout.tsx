import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Expertise",
  description:
    "Industry-specific digital marketing solutions for SaaS, e‑commerce, finance, education, and more.",
  alternates: { canonical: "/industry" },
  openGraph: {
    title: "Industry Expertise | Plantus Media",
    url: "https://plantusmedia.com/industry",
    images: [{ url: "/opengraph-image?title=Industry%20Expertise%20%E2%80%93%20Plantus%20Media" }],
  },
};

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://plantusmedia.com/" },
              { "@type": "ListItem", position: 2, name: "Industry", item: "https://plantusmedia.com/industry" },
            ],
          }),
        }}
      />
    </>
  );
}


