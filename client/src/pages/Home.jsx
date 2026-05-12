import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold mb-4">
        Leone Solutions Freight
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        Ship your goods from the UK to Sierra Leone safely and affordably.
      </p>

      <div className="flex gap-4">

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Register
        </Link>

      </div>

    </div>
  );
}