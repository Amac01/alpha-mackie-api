import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await API.get("/packages/my");
        setPackages(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load packages");
      }
    };

    fetchPackages();
  }, []);

  return (
    <div>
      <h2>My Packages</h2>
      <Link to="/submit-package">
      Submit New Package
      </Link>

<br /><br />

      {packages.length === 0 ? (
        <p>No packages yet</p>
      ) : (
        packages.map((pkg) => (
          <div key={pkg._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{pkg.description}</h3>
            <p>Tracking ID: {pkg.trackingId}</p>
            <p>Status: {pkg.status}</p>
            <p>Weight: {pkg.weight}kg</p>

            {pkg.price && <p>Price: £{pkg.price}</p>}
          </div>
        ))
      )}
    </div>
  );
}
