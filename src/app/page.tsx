import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Prestations } from "@/components/sections/Prestations/Prestations";
import { Universe } from "@/components/sections/Universe/Universe";
import { Cv } from "@/components/sections/Cv/Cv";
import { Projets } from "@/components/sections/Projets";
import { Parcours } from "@/components/sections/Parcours";
import { Footer } from "@/components/layout/Footer";

 {/* Remarque : Home() est en cours de refonte que l'on fait petit à petit dès qu'on touche aux différentes sections, en allant du haut jusqu'au bas */}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Prestations />
        <Projets />
        <Universe />
        <Cv />
      </main>
      
      <Footer />
    </>
  );
}
