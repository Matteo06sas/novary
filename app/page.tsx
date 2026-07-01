import { AboutSection } from "@/components/sections/about-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PromoVideoSection } from "@/components/sections/promo-video-section";
import { ServicesSection } from "@/components/sections/services-section";
import { Marquee } from "@/components/marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <Marquee />
        <PromoVideoSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <AboutSection />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
