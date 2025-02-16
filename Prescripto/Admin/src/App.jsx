import { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";

function App() {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="bg-[#F8F9Fd]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" elements={<></>} />
          <Route path="/admin-dashboard" elements={<Dashboard />} />
          <Route path="/all-appointments" elements={<AllAppointments />} />
          <Route path="/add-doctor" elements={<AddDoctor />} />
          <Route path="/doctors-list" elements={<DoctorsList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
