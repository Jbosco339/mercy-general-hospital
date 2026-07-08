import Hero from "../components/Hero";
import Doctors from "../components/Doctors";
import AppointmentCTA from "../components/AppointmentCTA";

function DoctorsPage() {
  return (
    <>
      <Hero
        title="Meet Our Doctors"
        subtitle="Experienced specialists committed to delivering quality healthcare."
        image="/images/hero/hero-doctors.jpg"
      />

      <Doctors />

      <AppointmentCTA />
    </>
  );
}

export default DoctorsPage;