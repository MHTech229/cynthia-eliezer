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
  // - Title -
  title: {
    default: "ACO'S - À Cœurs Ouverts | Le podcast qui révèle l'humain derrière le leader",
    template: "%s | ACO'S - À Cœurs Ouverts",
  },

  // - Description -
  description:
    "À Cœurs Ouverts, le podcast de Cynthia ELIEZER. Des interviews vidéo authentiques sur YouTube et LinkedIn. Pas de script, pas de façade - votre histoire racontée avec force, émotion et vérité. +22 interviews réalisées, des leaders, entrepreneurs et experts qui osent se dévoiler.",

  // - Keywords -
  keywords: [
    "podcast interview",
    "À Cœurs Ouverts",
    "ACO'S",
    "Cynthia Eliezer",
    "podcast leadership",
    "podcast authenticité",
    "interview vidéo LinkedIn",
    "podcast entrepreneur",
    "storytelling",
    "développement personnel",
    "podcast francophone",
    "interview humain",
    "podcast business",
    "leaders",
  ],

  // - Canonical -
  alternates: {
    canonical: "https://acoeurs-ouverts.com",
  },

  // - Authors -
  authors: [{ name: "Cynthia ELIEZER", url: "https://www.linkedin.com/in/a-coeurs-ouverts" }],
  creator: "Cynthia ELIEZER",
  publisher: "ACO'S - À Cœurs Ouverts",

  // - Open Graph -
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://acoeurs-ouverts.com",
    siteName: "ACO'S - À Cœurs Ouverts",
    title: "ACO'S - À Cœurs Ouverts | Le podcast qui révèle l'humain derrière le leader",
    description:
      "Des interviews vidéo sans script ni façade. Cynthia ELIEZER reçoit des leaders, entrepreneurs et experts qui osent raconter leur vraie histoire. Et si c'était votre tour ?",
    images: [
      {
        url: "https://acoeurs-ouverts.com/og-image.jpg", // ← remplace par ton image OG réelle (1200×630)
        width: 1200,
        height: 630,
        alt: "ACO'S - À Cœurs Ouverts, le podcast de Cynthia ELIEZER",
      },
    ],
  },

  // - Twitter / X Card -
  twitter: {
    card: "summary_large_image",
    title: "ACO'S - À Cœurs Ouverts | Le podcast qui révèle l'humain derrière le leader",
    description:
      "Pas de script, pas de façade. Des interviews vidéo authentiques avec des leaders qui osent se dévoiler. Par Cynthia ELIEZER.",
    images: ["https://acoeurs-ouverts.com/og-image.jpg"], // ← même image OG
    creator: "@CynthiaEliezer", // ← à adapter si elle a un handle Twitter
  },

  // - Favicon & icônes -
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#f06a0f" },
    ],
  },

  // - Manifest PWA -
  manifest: "/site.webmanifest",

  // - Robots -
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // - Verification (à remplir si tu connectes Search Console / Bing) -
  // verification: {
  //   google: "XXXXXXXXXXXXXXXX",
  //   yandex: "XXXXXXXXXXXXXXXX",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PodcastSeries",
              "name": "À Cœurs Ouverts - ACO'S",
              "alternateName": "ACO'S",
              "description": "Podcast vidéo d'interviews authentiques animé par Cynthia ELIEZER. Des leaders, entrepreneurs et experts qui racontent leur vraie histoire, sans script ni façade.",
              "url": "https://acoeurs-ouverts.com",
              "inLanguage": "fr",
              "author": {
                "@type": "Person",
                "name": "Cynthia ELIEZER",
                "url": "https://www.linkedin.com/in/a-coeurs-ouverts",
                "jobTitle": "Podcasteuse & Intervieweuse",
                "sameAs": [
                  "https://www.linkedin.com/in/a-coeurs-ouverts",
                  "https://www.youtube.com/@acoeursouverts"
                ]
              },
              "publisher": {
                "@type": "Organization",
                "name": "ACO'S - À Cœurs Ouverts",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://acoeurs-ouverts.com/logo.png"
                }
              },
              "image": "https://acoeurs-ouverts.com/og-image.jpg",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
