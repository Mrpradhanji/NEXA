import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on SEO, digital marketing, branding, and technology from Plantus Media.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Plantus Media",
    url: "https://www.plantusmediaconsulting.com/blog",
    images: [{ url: "/opengraph-image?title=Plantus%20Media%20Blog" }],
  },
  other: {
    "link:alternate:rss": "/blog/rss",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


