import Header from "@/src/components/common/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agricultural Information Hub",
  description: "Agricultural Information Hub that so a comprehensive resource foe farmers and agriculture enthusiasts. The hub will provide farming guides, detailed crop information, pest control strategies, and a means for users to contact agricultural expert for further assistance.",
  keywords: [
    "agriculture",
    "farming",
    "crop information",
    "pest control",
    "agriculture hub",
    "farming resources",
    "farmers support",
  ],
  authors: [{ name: "Muhammad Ashraful" }],
  creator: "Muhammad Ashraful",
  openGraph: {
    title: "Agricultural Information Hub",
    description:
      "Your go-to platform for reliable farming resources, crop advice, and pest control strategies.",
    url: "",
    siteName: "Agricultural Information Hub",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agricultural Information Hub",
    description:
      "Access expert farming guides, crop data, and pest control methods on the Agricultural Information Hub.",
    images: [""],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header/>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
