import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Prestations } from "@/components/sections/Prestations/Prestations";
import { Realisations } from "@/components/sections/Realisations/Realisations";
import { Cv } from "@/components/sections/Cv/Cv";

import { Atelier } from "@/components/sections/Atelier/Atelier";
import { Footer } from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Prestations />
        <Realisations />
        <Atelier />
        <Cv />
      </main>
      <Footer />
    </>
  );
}
