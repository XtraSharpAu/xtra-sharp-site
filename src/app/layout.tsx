import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "@/styles/globals.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Xtra Sharp",
  image: "https://xtrasharp.com.au/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Campbelltown",
    addressRegion: "NSW",
    addressCountry: "Australia",
  },
  telephone: "+61 412 974 277",
  email: "phil@xtrasharp.com.au",
  url: "https://xtrasharp.com.au",
  description:
    "Professional sharpening services for knives, scissors, clipper blades, garden tools, processor blades and industrial blades in Campbelltown NSW. Appointment-only — most contact occurs Monday–Friday 9 AM–5 PM. Mail-in sharpening available Australia-wide.",
  areaServed:
    "Campbelltown NSW, Macarthur region, Australia-wide (mail-in sharpening)",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xtra Sharp | Knife & Tool Sharpening in Campbelltown & Macarthur",
  description:
    "Professional, appointment-only knife, scissor, clipper blade and tool sharpening in Campbelltown, Western Sydney & the Macarthur region. Drop-off, mail-in and local pick-up available.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-text">
        <GoogleAnalytics />
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
