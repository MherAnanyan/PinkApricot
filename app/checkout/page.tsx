import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CheckoutPage from "@/components/CheckoutPage";

export const metadata: Metadata = {
  title: "Basket & Checkout — Pink Apricot",
  description: "Review your order and checkout. Delivery anywhere in Yerevan.",
};

export default function Checkout() {
  return (
    <>
      <Nav />
      <CheckoutPage />
      <Footer />
    </>
  );
}
