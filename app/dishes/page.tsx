import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DishesPage from "@/components/DishesPage";

export const metadata: Metadata = {
  title: "Dishes — Blue Apricot",
  description: "Browse Armenian and international dishes. Build your week or let us suggest 5 dishes for you.",
};

export default function Dishes() {
  return (
    <>
      <Nav />
      <DishesPage />
      <Footer />
    </>
  );
}
