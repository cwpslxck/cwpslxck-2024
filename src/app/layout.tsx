import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "CWXکپسلاک",
  description: "portfolio website of cwpslxck: junior frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="eng" className={font.className}>
      <head>
        <meta property="og:site_name" content="cwpslxck.ir" />
        <meta
          property="og:description"
          content="portfolio website of cwpslxck: junior frontend developer"
        />
        <meta property="og:title" content="cwp$lxck" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="cwp$lxck" />
        <meta
          property="twitter:description"
          content="portfolio website of cwpslxck: junior frontend developer"
        />
        <meta property="og:image" content="https://cwpslxck.ir/preview.jpg" />
        <meta
          property="twitter:image"
          content="https://cwpslxck.ir/preview.jpg"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
