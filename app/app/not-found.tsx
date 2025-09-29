import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">The page you are looking for doesn&apos;t exist.</p>
      </div>
    </div>
  );
}


