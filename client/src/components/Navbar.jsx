import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        Leone Solutions
      </h1>

      <div className="flex gap-4">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/submit-package">
          Submit Package
        </Link>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}