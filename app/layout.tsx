import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "By Dishita",
  description: "Bay Area Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/lightbox2/css/lightbox.min.css" rel="stylesheet" />
      </head>
      <body className="bg-white font-sans text-gray-900 min-h-screen">
        <Navbar />
        <main>
          {children}
        </main>
        <Script src="/lightbox2/js/lightbox-plus-jquery.min.js"/>
      </body>
    </html>
  );
}
