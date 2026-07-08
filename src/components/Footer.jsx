import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto py-16 px-6 grid lg:grid-cols-4 gap-10">

        <div>

          <h2 className="text-white text-2xl font-bold mb-4">
            Mercy General Hospital
          </h2>

          <p>
            Compassionate healthcare delivered by experienced professionals using
            modern medical technology.
          </p>

        </div>

        <div>

          <h3 className="text-white font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>Home</li>
            <li>About</li>
            <li>Doctors</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>

        </div>

        <div>

          <h3 className="text-white font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4">

            <p className="flex gap-3">
              <FaPhone />
              +234 800 123 4567
            </p>

            <p className="flex gap-3">
              <FaEnvelope />
              info@mercygeneral.com
            </p>

            <p className="flex gap-3">
              <FaMapMarkerAlt />
              123 Healthcare Avenue
            </p>

          </div>

        </div>

        <div>

          <h3 className="text-white font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">

            <FaFacebook className="hover:text-blue-500 cursor-pointer" />

            <FaInstagram className="hover:text-pink-500 cursor-pointer" />

            <FaTwitter className="hover:text-sky-500 cursor-pointer" />

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center">

        © {new Date().getFullYear()} Mercy General Hospital. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;