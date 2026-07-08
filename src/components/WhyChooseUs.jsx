import {
  FaHeartbeat,
  FaClock,
  FaUserMd,
  FaAward,
} from "react-icons/fa";

function WhyChooseUs() {
  const items = [
    {
      icon: <FaUserMd />,
      title: "Expert Doctors",
      text: "Highly qualified specialists with years of experience.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Modern Equipment",
      text: "Latest medical technology for accurate diagnosis.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Emergency",
      text: "Emergency services available around the clock.",
    },
    {
      icon: <FaAward />,
      title: "Quality Care",
      text: "Compassionate healthcare focused on every patient.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose Mercy General Hospital
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;