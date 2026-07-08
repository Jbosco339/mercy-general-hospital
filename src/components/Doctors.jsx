import doctors from "../data/doctors";

function Doctors() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Meet Our Specialists
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {doctors.map((doctor) => (

            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 mt-2">
                  {doctor.specialty}
                </p>

                <p className="text-gray-500 mt-1">
                  {doctor.experience}
                </p>

                <p className="text-sm text-gray-600 mt-4">
                  {doctor.bio}
                </p>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
                  View Profile
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Doctors;