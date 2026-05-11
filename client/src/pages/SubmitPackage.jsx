import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function SubmitPackage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    description: "",
    weight: "",
    length: "",
    width: "",
    height: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    try {

      await API.post("/packages", form);

      alert("Package submitted successfully");

      navigate("/dashboard");

    } catch (err) {

      console.error(err);

      alert("Failed to submit package");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-black text-white px-8 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Leone Solutions
        </h1>

        <Link
          to="/dashboard"
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Dashboard
        </Link>

      </nav>

      {/* FORM */}
      <div className="max-w-2xl mx-auto mt-12 bg-white p-10 rounded-2xl shadow-md">

        <h2 className="text-4xl font-bold mb-8">
          Submit Package
        </h2>

        <div className="space-y-5">

          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
          />

          <input
            name="weight"
            placeholder="Weight (kg)"
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
          />

          <input
            name="length"
            placeholder="Length"
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
          />

          <input
            name="width"
            placeholder="Width"
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
          />

          <input
            name="height"
            placeholder="Height"
            onChange={handleChange}
            className="w-full p-4 border rounded-lg"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800"
          >
            Submit Package
          </button>

        </div>

      </div>

    </div>
  );
}
