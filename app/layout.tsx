import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Joseph Wanyoike Njoroge (NJW) | Portfolio & WDA Project",
  description: "Professional portfolio of Joseph Wanyoike Njoroge (NJW), Lead Data Analyst for the World Data Analysis (WDA) Project. Highlighting expertise in Economics, Quantitative Finance (CIFA), and Computer Development (Next.js, TypeScript, Node.js, Django).",
  keywords: [
    "Joseph Wanyoike Njoroge",
    "NJW",
    "World Data Analysis Project",
    "WDA Project",
    "WDA Finance",
    "WDA AI Labs",
    "CIFA KASNEB",
    "Economics JKUAT",
    "Computer Developer",
    "Next.js Developer",
    "Django Developer",
    "NJW Code",
    "NJW Digital Marketing",
    "SEO Specialist",
  ].join(", "),
  authors: [{ name: "Joseph Wanyoike Njoroge", url: "https://www.josephwanyoike.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
