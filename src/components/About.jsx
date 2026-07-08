function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/2.webp"
          alt="Hospital"
          className="rounded-xl shadow-lg"
        />

        <div>

          <span className="text-blue-600 font-semibold uppercase">
            About Us
          </span>

          <h2 className="text-4xl font-bold mt-3 text-slate-800">
            Excellence in Healthcare
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Mercy General Hospital is committed to delivering exceptional
            healthcare services through experienced medical professionals,
            modern technology, and compassionate patient care.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-8">

            <div className="bg-slate-100 p-5 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600">25+</h3>
              <p>Years of Service</p>
            </div>

            <div className="bg-slate-100 p-5 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600">120+</h3>
              <p>Medical Experts</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;