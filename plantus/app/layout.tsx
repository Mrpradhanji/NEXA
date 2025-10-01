import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu/Menu";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plantusmedia.com"),
  title: {
    default: "PLANTUSMEDIA | Digital Marketing, SEO, and Growth",
    template: "%s | PlantusMedia",
  },
  description:
    "Plantus Media is a digital marketing agency helping businesses grow with SEO, content, paid media, and high-converting websites.",
  keywords: [
    "Plantus Media",
    "digital marketing",
    "SEO",
    "content marketing",
    "paid ads",
    "web design",
    "branding",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://plantusmedia.com/",
    siteName: "PLANTUSMEDIA",
    title: "PLANTUSMEDIA | Digital Marketing, SEO, and Growth",
    description:
      "Plantus Media is a digital marketing agency helping businesses grow with SEO, content, paid media, and high-converting websites.",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "PLANTUSMEDIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plantus Media | Digital Marketing, SEO, and Growth",
    description:
      "Plantus Media is a digital marketing agency helping businesses grow with SEO, content, paid media, and high-converting websites.",
    images: [
      {
        url: "/opengraph-image?title=Plantus%20Media",
        alt: "PLANTUSMEDIA",
      },
    ],
  },
  icons: {
    icon: "./favicon.ico",
  },
  themeColor: "#ff5800",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <link rel="preconnect" href="https://images.unsplash.com" />
        <Menu/>
        {children}
        {/* Structured Data: Organization & WebSite */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PLANTUSMEDIA",
              url: "https://plantusmedia.com",
              logo: "https://plantusmedia.com/images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/plantusmedia",
                "https://twitter.com/plantusmedia",
                "https://www.instagram.com/plantusmedia"
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PLANTUSMEDIA",
              url: "https://plantusmedia.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://plantusmedia.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
