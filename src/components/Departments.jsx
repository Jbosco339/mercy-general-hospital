const departments = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Radiology",
  "Dental",
  "Laboratory",
  "Pharmacy"
];

function Departments() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl text-center font-bold mb-14">
          Departments
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {departments.map((dept) => (

            <div
              key={dept}
              className="bg-blue-600 text-white rounded-xl p-8 text-center hover:bg-blue-700 transition"
            >

              <h3 className="text-xl font-semibold">
                {dept}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Departments;