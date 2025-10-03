import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { format } from "date-fns";
import { getPostBySlug, getRelatedPosts } from "../data";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";
import BackToTopButton from "../../components/BackToTopButton";

interface Props {
  params: { slug: string };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  const relatedPosts = post ? getRelatedPosts(post) : [];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-300 mb-6">
          The requested blog post could not be found.
        </p>
        <Link
          href="/blog"
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");
  const ogImage = `/opengraph-image?title=${encodeURIComponent(post.title)}`;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-black py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 text-white/80 text-sm font-medium rounded-full flex items-center"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
            {/* Author */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 mr-3 overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium text-white">{post.author.name}</p>
                <p className="text-xs text-gray-400">{post.author.role}</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-orange-400" />
              {formattedDate}
            </div>

            {/* Read Time */}
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-orange-400" />
              {post.readTime}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12 text-left break-words overflow-x-hidden">
        <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <article className="prose prose-invert max-w-none text-left break-words">
          <MarkdownRenderer content={post.content} />
        </article>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-white/10 overflow-hidden flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">
                About {post.author.name.split(" ")[0]}
              </h3>
              <p className="text-gray-300 mb-3">{post.author.bio}</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-orange-400">
                        Read more
                        <svg
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Back to top */}
      <BackToTopButton />
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: [
              `https://www.plantusmediaconsulting.com${post.image}`,
              `https://www.plantusmediaconsulting.com${ogImage}`,
            ],
            datePublished: new Date(post.date).toISOString(),
            author: {
              "@type": "Person",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Plantus Media",
              logo: {
                "@type": "ImageObject",
                url: "https://www.plantusmediaconsulting.com/images/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.plantusmediaconsulting.com/blog/${post.slug}`,
            },
          }),
        }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.plantusmediaconsulting.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://www.plantusmediaconsulting.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://www.plantusmediaconsulting.com/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { getPostBySlug } = await import("../data");
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${post.title}`;
  const description = post.excerpt || post.content.slice(0, 160);
  const url = `/blog/${post.slug}`;
  const image = post.image || "/images/hero-image.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url: `https://www.plantusmediaconsulting.com${url}`,
      images: [{ url: image }],
      authors: [post.author.name],
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image }],
    },
  };
}
