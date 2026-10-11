import Header from "../components/Header";
import Hero from "../components/Hero";
import MetricBand from "../components/MetricBand";
import Problem from "../components/Problem";
import Process from "../components/Process";
import Services from "../components/Services";
import Cases from "../components/Cases";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import FinalCta from "../components/FinalCta";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Reveal>
        <MetricBand />
      </Reveal>
      <Reveal>
        <Problem />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Cases />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
    </main>
  );
}
