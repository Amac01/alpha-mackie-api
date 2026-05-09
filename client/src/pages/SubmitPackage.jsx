import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

      alert("Package submitted");

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert("Failed to submit package");
    }
  };

  return (
    <div>
      <h2>Submit Package</h2>

      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="weight"
        placeholder="Weight"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="length"
        placeholder="Length"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="width"
        placeholder="Width"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="height"
        placeholder="Height"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Submit Package
      </button>
    </div>
  );
}