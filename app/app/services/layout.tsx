import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing services: SEO, content, paid media, web design, and branding.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Plantus Media",
    url: "https://plantusmedia.com/services",
    images: [{ url: "/opengraph-image?title=Services%20%E2%80%93%20Plantus%20Media" }],
  },
};

export default function ServicesLayout({
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
              { "@type": "ListItem", position: 2, name: "Services", item: "https://plantusmedia.com/services" },
            ],
          }),
        }}
      />
    </>
  );
}


