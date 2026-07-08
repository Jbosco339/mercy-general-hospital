import Hero from "../components/Hero";
import Services from "../components/Services";
import AppointmentCTA from "../components/AppointmentCTA";

function ServicesPage() {
  return (
    <>
      <Hero
        title="Medical Services"
        subtitle="Comprehensive healthcare services delivered by experienced professionals."
        image="/images/hero/hero-services.jpg"
      />

      <Services />

      <AppointmentCTA />
    </>
  );
}

export default ServicesPage;