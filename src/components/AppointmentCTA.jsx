import { Link } from "react-router-dom";

function AppointmentCTA() {
  return (
    <section className="py-20 bg-blue-600">

      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        <h2 className="text-4xl font-bold">
          Need Medical Assistance?
        </h2>

        <p className="mt-5 text-lg">
          Schedule an appointment with one of our specialists today.
        </p>

        <Link
          to="/appointment"
          className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition"
        >
          Book Appointment
        </Link>

      </div>

    </section>
  );
}

export default AppointmentCTA;