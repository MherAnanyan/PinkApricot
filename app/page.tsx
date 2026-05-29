import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Boxes from "@/components/Boxes";
import DishesTeaser from "@/components/DishesTeaser";
import ExtrasSection from "@/components/ExtrasSection";
import Freshness from "@/components/Freshness";
import Why from "@/components/Why";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <Boxes />
      <DishesTeaser />
      <ExtrasSection />
      <Freshness />
      <Why />
      <CTA />
      <Footer />
    </>
  );
}
