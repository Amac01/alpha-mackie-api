import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {

    try {

      await API.post("/auth/register", form);

      alert("Registration successful");

      navigate("/login");

    } catch (err) {

      console.error(err);

      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-4xl font-bold mb-8 text-center">
          Register
        </h2>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
        >
          Create Account
        </button>

      </div>

    </div>
  );
}
