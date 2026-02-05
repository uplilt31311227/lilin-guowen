import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "立霖國文 | 素養教學領航者",
  description: "人生沒有 Google，但有經典可循。帶你讀懂文章邏輯，寫出生命厚度。會考、學測國文專業輔導。",
  keywords: ["國文", "會考", "學測", "素養教學", "閱讀理解", "作文", "補習"],
  icons: {
    icon: "/lilin-guowen/icon.png",
    apple: "/lilin-guowen/icon.png",
  },
  openGraph: {
    title: "立霖國文 | 素養教學領航者",
    description: "人生沒有 Google，但有經典可循。帶你讀懂文章邏輯，寫出生命厚度。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.variable} antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
