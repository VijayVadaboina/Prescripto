import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Doctors" element={<Doctors />}></Route>
          <Route path="/Doctors/:speciality" element={<Doctors />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/my-appointments" element={<MyAppointments />}></Route>
          <Route path="/appointment/:docId" element={<Appointment />}></Route>
          <Route path="/my-profile" element={<MyProfile />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
