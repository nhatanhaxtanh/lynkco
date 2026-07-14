import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Bảng giá xe Lynk & Co mới nhất, đăng ký lái thử`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Lynk & Co",
    "Lynk & Co Việt Nam",
    "giá xe Lynk & Co",
    "Lynk & Co 01",
    "Lynk & Co 06",
    "Lynk & Co 08",
    "Lynk & Co 900",
    "đăng ký lái thử Lynk & Co",
    "đại lý Lynk & Co Sài Gòn",
    "SUV Lynk & Co",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Bảng giá xe Lynk & Co mới nhất`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Bảng giá xe Lynk & Co mới nhất`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
