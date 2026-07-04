import { Navbar }               from "@/components/Navbar";
import { Hero }                 from "@/components/Hero";
import { AboutUs }              from "@/components/AboutUs";
import { ChooseHowToCreate }    from "@/components/ChooseHowToCreate";
import { ProductUniverse }      from "@/components/ProductUniverse";
import { MatrixLabStickers }    from "@/components/MatrixLabStickers";
import { Experiences }          from "@/components/Experiences";
import { TShirtLab }            from "@/components/TShirtLab";
import { EnterpriseSolutions }  from "@/components/EnterpriseSolutions";
import { StoreCatalog }         from "@/components/StoreCatalog";
import { ContactCTA }           from "@/components/ContactCTA";
import { Footer }               from "@/components/Footer";
import { MobileWhatsApp }       from "@/components/MobileWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutUs />
        <ChooseHowToCreate />
        <ProductUniverse />
        <MatrixLabStickers />
        <Experiences />
        <TShirtLab />
        <EnterpriseSolutions />
        <StoreCatalog />
        <ContactCTA />
      </main>
      <Footer />
      {/* Floating WhatsApp button — mobile only, appears after hero */}
      <MobileWhatsApp />
    </>
  );
}
