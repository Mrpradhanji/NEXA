import { searchPosts } from "../blog/data";
import Link from "next/link";

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams.q || "").trim();
  const results = q ? searchPosts(q) : [];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Search</h1>
        <form className="mb-8">
          <input
            name="q"
            defaultValue={q}
            placeholder="Search articles..."
            className="w-full max-w-xl border border-gray-300 rounded-lg px-4 py-2"
          />
        </form>
        {q && (
          <p className="text-gray-600 mb-4">{results.length} result(s) for &quot;{q}&quot;</p>
        )}
        <ul className="space-y-4">
          {results.map((post) => (
            <li key={post.id} className="border-b pb-4">
              <Link className="text-orange-600 font-semibold" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <p className="text-sm text-gray-700">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


