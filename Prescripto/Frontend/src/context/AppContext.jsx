import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoading, setIsLoading] = useState(false);

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [userData, setUserData] = useState(false);
  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "api/doctor/list");

      if (data.success) {
        setDoctors(data.doctors);
        console.log("docots data:", data.doctors);
      }
    } catch (error) {
      console.log("error:", error);
      toast.error(error.message);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "api/user/get-profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("user data:", data);

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error:", error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  useEffect(() => {
    // request intercepter

    axios.interceptors.request.use(
      (config) => {
        setIsLoading(true);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    //response intercepter
    axios.interceptors.response.use(
      (config) => {
        setIsLoading(false);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);
  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    isLoading,
    setIsLoading,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
