import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ScrollTop/>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;