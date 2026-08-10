import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Universe } from "@/components/sections/Universe/Universe";
import { Cv } from "@/components/sections/Cv/Cv";
import { Projets } from "@/components/sections/Projets";
import { Parcours } from "@/components/sections/Parcours";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Universe />
        <Cv />
        <Projets />
        <Parcours /> 
      </main>
      
      <Footer />
    </>
  );
}
