"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PodcastIntro from "@/components/sections/PodcastIntro";
import PodcastOffers from "@/components/sections/PodcastOffers";
import Episodes from "@/components/sections/Episodes";
import References from "@/components/sections/References";
import Testimonials from "@/components/sections/Testimonials";
import Calendly from "@/components/sections/Calendly";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="min-h-screen pt-4">
      <Navbar />
      <Hero />
      <PodcastIntro />
      <PodcastOffers />
      <Episodes />
      <References />
      <Testimonials />
      <Calendly />
      <FinalCta />
      <Footer />
    </main>
  );
}