import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danila-sergejevic-anikin-portfolio.vercel.app"),
  title: {
    default: "Danila Sergejevič Anikin | Software Developer & AI Engineer",
    template: "%s | Danila Sergejevič Anikin",
  },
  description:
    "Interactive portfolio of Danila Sergejevič Anikin, a Prague-based software developer focused on AI engineering, automation, Linux systems, DevOps, and modern web applications.",
  keywords: [
    "Danila Anikin",
    "Software Developer",
    "AI Software Engineer",
    "DevOps Engineer",
    "Linux Admin",
    "Prague developer",
    "portfolio",
  ],
  authors: [{ name: "Danila Sergejevič Anikin" }],
  creator: "Danila Sergejevič Anikin",
  openGraph: {
    title: "Danila Sergejevič Anikin | Software Developer & AI Engineer",
    description:
      "AI engineering, automation, Linux systems, DevOps, and modern web software from Prague.",
    url: "https://danila-sergejevic-anikin-portfolio.vercel.app",
    siteName: "Danila Sergejevič Anikin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danila Sergejevič Anikin | Software Developer & AI Engineer",
    description:
      "Interactive developer portfolio with modern, retro, and Windows 1-inspired design modes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
