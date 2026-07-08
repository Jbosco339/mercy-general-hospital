import Hero from "../components/Hero";

function Appointment() {
  return (
    <>
      <Hero
        title="Book Appointment"
        subtitle="Schedule your visit with one of our experienced specialists."
        image="/images/hero/hero-appointment.jpg"
      />

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Appointment Form
            </h2>

            <form className="grid md:grid-cols-2 gap-6">

              <input
                className="border rounded-lg p-4"
                placeholder="Full Name"
              />

              <input
                className="border rounded-lg p-4"
                placeholder="Email"
              />

              <input
                className="border rounded-lg p-4"
                placeholder="Phone Number"
              />

              <select className="border rounded-lg p-4">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
                <option>Dental</option>
              </select>

              <input
                type="date"
                className="border rounded-lg p-4"
              />

              <input
                type="time"
                className="border rounded-lg p-4"
              />

              <textarea
                rows="5"
                placeholder="Additional Information"
                className="border rounded-lg p-4 md:col-span-2"
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg md:col-span-2"
              >
                Book Appointment
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}

export default Appointment;