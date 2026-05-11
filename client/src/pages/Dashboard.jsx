import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Dashboard() {

  const [packages, setPackages] = useState([]);

  useEffect(() => {

    const fetchPackages = async () => {
      try {

        const res = await API.get("/packages/my");

        setPackages(res.data);

      } catch (err) {

        console.error(err);

      }
    };

    fetchPackages();

  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-black text-white px-8 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Leone Solutions
        </h1>

        <Link
          to="/submit-package"
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Submit Package
        </Link>

      </nav>

      {/* PAGE CONTENT */}
      <div className="max-w-6xl mx-auto p-8">

        <h2 className="text-4xl font-bold mb-8">
          My Packages
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {packages.map((pkg) => (

            <div
              key={pkg._id}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200"
            >

              <h3 className="text-2xl font-bold mb-4">
                {pkg.description}
              </h3>

              <p className="text-gray-600 mb-2">
                Tracking ID:
                <span className="font-semibold ml-2">
                  {pkg.trackingId}
                </span>
              </p>

              <p className="mb-2">
                Status:
                <span
                  className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold
                  ${
                    pkg.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {pkg.status}
                </span>
              </p>

              <p className="text-gray-700 mb-2">
                Weight: {pkg.weight}kg
              </p>

              {pkg.price && (
                <p className="text-xl font-bold text-black mt-4">
                  £{pkg.price}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
