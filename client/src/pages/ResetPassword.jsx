import { useState } from "react";
import API from "../services/api";

export default function ResetPassword() {

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {

    try {

      const res = await API.post(
        "/auth/reset-password",
        {
          token,
          password
        }
      );

      setMessage(res.data.message);

    } catch (err) {

      setMessage("Password reset failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Reset Password
        </h1>

        <input
          placeholder="Reset Token"
          value={token}
          onChange={(e) =>
            setToken(e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleReset}
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Reset Password
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