import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BoxDetail from "@/components/BoxDetail";
import { boxes } from "@/lib/boxes";
import type { Metadata } from "next";
import { use } from "react";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const box = boxes.find(b => b.id === id);
  if (!box) return { title: "Box not found — Blue Apricot" };
  return {
    title: `${box.country.en} — ${box.dish.en} | Blue Apricot`,
    description: box.description.en,
    openGraph: { title: `${box.country.en} Box — Blue Apricot`, description: box.description.en, siteName: "Blue Apricot" },
  };
}
export function generateStaticParams() {
  return boxes.map(b => ({ id: b.id }));
}
export default function BoxPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <>
      <Nav />
      <BoxDetail id={id} />
      <Footer />
    </>
  );
}
