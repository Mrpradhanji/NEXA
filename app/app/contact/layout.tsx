import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Plantus Media to discuss SEO, digital marketing, and web projects.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Plantus Media",
    url: "https://plantusmedia.com/contact",
    images: [{ url: "/opengraph-image?title=Contact%20%E2%80%93%20Plantus%20Media" }],
  },
};

export default function ContactLayout({
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
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://plantusmedia.com/contact" },
            ],
          }),
        }}
      />
    </>
  );
}


