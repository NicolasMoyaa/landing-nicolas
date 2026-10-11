import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Problem from "../components/Problem";
import Process from "../components/Process";
import Services from "../components/Services";
import Cases from "../components/Cases";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import FinalCta from "../components/FinalCta";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Problem />
      <Process />
      <Services />
      <Cases />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}
