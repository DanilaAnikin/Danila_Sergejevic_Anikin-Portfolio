import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danila-sergejevic-anikin-portfolio.vercel.app"),
  title: {
    default: "Danila Sergejevic Anikin | Software Developer & AI Engineer",
    template: "%s | Danila Sergejevic Anikin",
  },
  description:
    "Interactive portfolio of Danila Sergejevic Anikin, a Prague-based software developer focused on AI engineering, automation, Linux systems, DevOps, and modern web applications.",
  keywords: [
    "Danila Anikin",
    "Software Developer",
    "AI Software Engineer",
    "DevOps Engineer",
    "Linux Admin",
    "Prague developer",
    "portfolio",
  ],
  authors: [{ name: "Danila Sergejevic Anikin" }],
  creator: "Danila Sergejevic Anikin",
  openGraph: {
    title: "Danila Sergejevic Anikin | Software Developer & AI Engineer",
    description:
      "AI engineering, automation, Linux systems, DevOps, and modern web software from Prague.",
    url: "https://danila-sergejevic-anikin-portfolio.vercel.app",
    siteName: "Danila Sergejevic Anikin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danila Sergejevic Anikin | Software Developer & AI Engineer",
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
