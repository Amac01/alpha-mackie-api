import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitPackage from "./pages/SubmitPackage";


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route
        path="/submit-package"
        element={<SubmitPackage />}
      />

    </Routes>
  </BrowserRouter>
  );
}

export default App;