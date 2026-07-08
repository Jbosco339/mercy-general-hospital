import { Link } from "react-router-dom";

function Hero({ title, subtitle }) {
  return (
    <section
      className="relative h-112.5 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/11.webp')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-blue-900/60"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-white mb-4">
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>{" "}
            / {title}
          </p>

          <h1 className="text-5xl font-bold text-white">
            {title}
          </h1>

          <p className="text-blue-100 text-lg mt-6 max-w-2xl">
            {subtitle}
          </p>

        </div>
      </div>
    </section>
  );
}

export default Hero;