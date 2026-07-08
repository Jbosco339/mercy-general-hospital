import services from "../data/services";

function Services() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Healthcare Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-slate-50 rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;