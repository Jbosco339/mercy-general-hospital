import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Departments from "../components/Departments";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Doctors from "../components/Doctors";
import Testimonials from "../components/Testimonials";
import AppointmentCTA from "../components/AppointmentCTA";

function Home() {
  return (
    <>
      <Hero
        title="Compassionate Healthcare You Can Trust"
        subtitle="Providing world-class healthcare with experienced doctors and modern facilities."
      />

      <About />
      <Services />
      <Departments />
      <WhyChooseUs />
      <Stats />
      <Doctors />
      <Testimonials />
      <AppointmentCTA />
    </>
  );
}

export default Home;