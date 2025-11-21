"use client";

import Contact from "@/components/layout/contact";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import Services from "@/components/layout/services";
import WhyChooseUs from "@/components/layout/wyChouseUs";
import StartButton from "@/components/ui/startButton";


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
