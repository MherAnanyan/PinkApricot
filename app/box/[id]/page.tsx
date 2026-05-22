import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BoxDetail from "@/components/BoxDetail";
import { use } from "react";

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
