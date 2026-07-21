import Hero from "@/components/Hero";
import Services from "@/components/Services/Services";
import Venues from "@/components/Venues";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages/Packages";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import BookingContact from "@/components/BookingContact";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Services />
        <Venues />
      </Container>
      <Gallery />
      <Container>
        <Section
          id="packages"
          title="Our Packages"
          description="Flexible packages to suit every celebration and budget."
        >
          <Packages />
        </Section>

        <About />

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have celebrated with us."
        >
          <Testimonials />
        </Section>

        <Stats />

        <FAQ />

        <BookingContact />
      </Container>
    </>
  );
};

export default HomePage;
