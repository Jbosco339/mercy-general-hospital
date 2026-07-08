import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import testimonials from "../data/testimonial";

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            What Our Patients Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by thousands of patients every year.
          </p>

        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Left Arrow */}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 z-20"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 z-20"
          >
            <FaChevronRight />
          </button>

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >

            {testimonials.map((testimonial) => (

              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 p-12 text-center"
              >

                <div className="flex justify-center gap-1 text-yellow-400 mb-6">

                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}

                </div>

                <p className="text-xl italic text-slate-600 leading-9">

                  "{testimonial.review}"

                </p>

                <h3 className="mt-8 text-2xl font-bold">

                  {testimonial.name}

                </h3>

                <p className="text-blue-600 mt-2">
                  Patient
                </p>

              </div>

            ))}

          </div>

          {/* Dots */}

          <div className="flex justify-center gap-3 pb-8">

            {testimonials.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;