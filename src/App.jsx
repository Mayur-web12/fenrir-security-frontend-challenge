import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ScanDetails from "./pages/ScanDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scandetails" element={<ScanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;