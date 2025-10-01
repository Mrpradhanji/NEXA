import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works",
  description: "Explore our portfolio and case studies across industries.",
  alternates: { canonical: "/our-works" },
  openGraph: {
    title: "Our Works | Plantus Media",
    url: "https://plantusmedia.com/our-works",
    images: [{ url: "/opengraph-image?title=Our%20Works%20%E2%80%93%20Plantus%20Media" }],
  },
};

export default function OurWorksLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "Our Works", item: "https://plantusmedia.com/our-works" },
            ],
          }),
        }}
      />
    </>
  );
}


