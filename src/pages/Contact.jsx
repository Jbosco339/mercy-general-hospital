import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import AppointmentCTA from "../components/AppointmentCTA";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We're here to answer your questions and assist you."
        image="/images/hero/hero-contact.jpg"
      />

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <div>

            <h2 className="text-4xl font-bold mb-10">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">
                <FaPhone className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+234 800 123 4567</p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>info@mercygeneral.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p>123 Mercy Street, City</p>
                </div>
              </div>

            </div>

            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps?q=lagos&output=embed"
              className="w-full h-80 rounded-xl mt-10"
            ></iframe>

          </div>

          <ContactForm />

        </div>

      </section>

      <AppointmentCTA />
    </>
  );
}

export default Contact;