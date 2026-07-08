import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHospital, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Appointment", path: "/appointment" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">

        <Link to="/" className="flex items-center gap-3">
          <FaHospital className="text-4xl text-blue-600" />
          <div>
            <h1 className="font-bold text-xl">Mercy General</h1>
            <p className="text-xs text-gray-500">Hospital</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Emergency
          </button>

        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              {link.name}
            </NavLink>
          ))}

        </div>
      )}
    </header>
  );
}

export default Navbar;