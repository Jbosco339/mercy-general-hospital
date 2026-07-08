import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <p className="my-4">Page Not Found</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}