import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

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
      <>
        <Navbar />

        <div className="p-6">
        </div>
      </>

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
