import { NextResponse } from "next/server";
import { getAllPosts } from "../data";

export async function GET() {
  const base = "https://www.plantusmediaconsulting.com";
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const link = `${base}/blog/${post.slug}`;
      return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${link}</link>
        <guid isPermaLink="true">${link}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
      </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Plantus Media Blog</title>
      <link>${base}/blog</link>
      <description>Insights on SEO, digital marketing, branding, and technology.</description>
      <language>en-us</language>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=600, stale-while-revalidate=86400",
    },
  });
}


