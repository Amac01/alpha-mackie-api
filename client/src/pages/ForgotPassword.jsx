import { useState } from "react";
import API from "../services/api";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {

      const res = await API.post(
        "/auth/forgot-password",
        { email }
      );

      setMessage(
        `Reset token: ${res.data.resetToken}`
      );

    } catch (err) {

      setMessage("Unable to generate reset token");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Generate Reset Token
        </button>

        {message && (
          <p className="mt-4">
            {message}
          </p>
        )}

      </div>

    </div>
  );
}