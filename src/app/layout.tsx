import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "@/styles/globals.css";

// LocalBusiness schema with verified reviews and aggregate rating for SEO
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
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jason" },
      reviewBody:
        "I recently had these 3 Japanese knives sharpened, and I'm extremely pleased with the outcome. The blades were returned in outstanding condition, with excellent edge retention and precision. The level of craftsmanship and attention to detail exceeded my expectations. I would highly recommend Phil and his service to anyone looking for professional knife sharpening.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Michelle Siskovic" },
      reviewBody:
        "I would highly recommend Phil from Xtra Sharp Blade Sharpener. Phil was friendly, professional and extremely helpful throughout the whole process. His knowledge and attention to detail were fantastic, and I'm very happy with the sharpening results.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Lincoln",
        worksFor: {
          "@type": "Organization",
          name: "Sydney Residential Building Pty Ltd",
        },
      },
      reviewBody:
        "Phil always makes it a pleasure to trade with. My building equipment is returned ready & of a high quality sharpen with a short turnaround. Phil is someone you can rely on. You can contact him at any hour & he's always willing to be of assistance. I'd be lost without his prompt, professional, and affordable sharpening services.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rickey" },
      reviewBody:
        "Very reliable and great to deal with, at a reasonable price. I've been using Phil for years now to sharpen my fishing knives, kitchen knives, and secateurs — highly recommend him.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Dr Raynae Hall BVetMed MRCVS" },
      reviewBody:
        "I can't recommend Phil enough. During the pandemic, he kept our surgeries going in the vet clinic by keeping all our clipper blades in pristine condition. He sharpened and repaired them as needed. Not to mention, the phenomenal job with my personal knives at home. It really isn't sharp until Phil's had a go! The service and the craftsmanship are unparalleled. Thank you soo very much Phil! You put the xtra in xtra sharp!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
  },
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
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
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
