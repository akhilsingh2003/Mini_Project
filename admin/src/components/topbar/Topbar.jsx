import React from "react";
import "./topbar.css";
import {useHistory} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handlelogout = () =>{
   dispatch(logout())
   history.push("/login")
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">FilmyAdmin</span>
        </div>
                 
          <div className="options">
            <button className="logout" onClick={handlelogout}>Logout</button>
          </div>
        </div>
      </div>

  );
}
