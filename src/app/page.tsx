import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Services from "@/components/Services/Services";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Services />

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />
      </Container>
    </>
  );
};

export default HomePage;
