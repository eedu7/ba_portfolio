import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Abril_Fatface } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"]
})

const abrilFatface = Abril_Fatface({
    weight: ["400"],
    variable: "--font-abril-fatface",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Bisal Ahmad",
  description: "A portfolio website of 'Bisal Ahmad'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} ${abrilFatface.variable} antialiased bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
