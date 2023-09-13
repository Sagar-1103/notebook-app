import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Loader from './Loader'

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", date: "" });
  const [loaderState,setLoadingState] = useState(false);
  const getProfile = async () => {
    setLoadingState(true);
    const url = `${process.env.REACT_APP_LINK}/api/auth/getUserData`;
    const headers = {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    };
    const response = await axios.get(url, { headers });
    const json = await response.data;
    const originalDate = json.date;
    const dateObject = new Date(originalDate);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");
    const formattedDateTime = `${day}-${month}-${year}`;
    setUser({ name: json.name, email: json.email, date: formattedDateTime });
    setLoadingState(false);
  };

  const onLogout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  },[]);

  return (
    <>
    <div className="max-w-md mx-auto mt-60 p-6 relative bg-white rounded-lg border-2 border-grey shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Profile</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          className="w-full px-3 py-2 border rounded-lg bg-gray-200 hover:cursor-default"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          className="w-full px-3 py-2 border rounded-lg bg-gray-200 hover:cursor-default"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-gray-600 mb-1">
          Account created on:
        </label>
        <input
          id="bio"
          name="bio"
          value={user.date}
          className="w-full px-3 py-2 mb-7 border rounded-lg bg-gray-200 hover:cursor-default"
          readOnly
        />
        {loaderState && <Loader/>}
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 absolute right-7 bottom-3.5 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  </> 
    
  );
}
