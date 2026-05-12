import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

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

      <Navbar />

      <div className="max-w-2xl mx-auto p-8">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-4xl font-bold mb-8">
            Submit Package
          </h2>

          <div className="grid gap-4">

            <input
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              name="weight"
              placeholder="Weight"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              name="length"
              placeholder="Length"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              name="width"
              placeholder="Width"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              name="height"
              placeholder="Height"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3"
            />

            <button
              onClick={handleSubmit}
              className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
            >
              Submit Package
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}