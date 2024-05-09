import Contact from "@/components/Contact";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HeroText from "@/components/HeroText";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col scroll-smooth overflow-hidden">
      <Nav/>
      <HeroText />
      <Services />
      <WhyUs />
      <Contact />
    </main>
  );
}
