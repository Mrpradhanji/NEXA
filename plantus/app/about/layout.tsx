import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Plantus Media's mission, team, and values driving client growth.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Plantus Media",
    url: "https://www.plantusmediaconsulting.com/about",
    images: [{ url: "/opengraph-image?title=About%20%E2%80%93%20Plantus%20Media" }],
  },
};

export function generateViewport() {
  return {};
}

export default function AboutLayout({
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.plantusmediaconsulting.com/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://www.plantusmediaconsulting.com/about" },
            ],
          }),
        }}
      />
    </>
  );
}


