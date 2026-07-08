function Stats() {
  const stats = [
    ["25+", "Years Experience"],
    ["150+", "Doctors"],
    ["50,000+", "Happy Patients"],
    ["24/7", "Emergency Care"],
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 text-center">

        {stats.map(([number, title]) => (
          <div key={title}>

            <h2 className="text-5xl font-bold">
              {number}
            </h2>

            <p className="mt-3">
              {title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;