import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center flex-wrap gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {item.href ? (
              <Link className="text-gray-700 hover:text-orange-600" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <svg
                aria-hidden
                viewBox="0 0 20 20"
                className="h-4 w-4 text-gray-300"
              >
                <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
