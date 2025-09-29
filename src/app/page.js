"use client";

import Contact from "@/components/layout/contact";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import Services from "@/components/layout/services";
import WhyChooseUs from "@/components/layout/wyChouseUs";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
