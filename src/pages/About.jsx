import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AppointmentCTA from "../components/AppointmentCTA";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

function About() {
  return (
    <>
      <Hero
        title="About Mercy General Hospital"
        subtitle="Delivering compassionate, patient-centered healthcare through innovation and excellence."
        image="/images/9.webp"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <img
            src="/images/8.webp"
            alt="Hospital"
            className="rounded-xl shadow-xl"
          />

          <div>

            <span className="text-blue-600 uppercase font-semibold">
              Our Story
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Caring for Our Community
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Mercy General Hospital has been committed to delivering
              exceptional healthcare services with compassion, integrity and
              innovation. Our team of highly qualified healthcare professionals
              ensures every patient receives quality treatment in a safe and
              welcoming environment.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our mission is to improve lives by providing accessible,
              affordable, and patient-focused healthcare supported by modern
              medical technology.
            </p>

          </div>

        </div>
      </section>

      <section className="bg-slate-100 py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-8">
            <FaBullseye className="text-5xl text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-gray-600">
              Deliver quality healthcare with compassion, professionalism and
              innovation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <FaEye className="text-5xl text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-gray-600">
              To become the leading healthcare provider recognized for
              excellence in patient care.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <FaHandshake className="text-5xl text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Core Values</h3>
            <p className="text-gray-600">
              Compassion, Integrity, Respect, Teamwork and Excellence.
            </p>
          </div>

        </div>

      </section>

      <Stats />

      <AppointmentCTA />
    </>
  );
}

export default About;