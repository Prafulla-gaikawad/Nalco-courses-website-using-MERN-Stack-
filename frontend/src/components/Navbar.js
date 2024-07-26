import React from "react";
import "./Navbar.css";
import logo from "../logo.png";
import banner from "../banner.jpg";

import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul className="naviA d-flex ">
        <div className="naviIm">
          <span className="pk">nal</span>
          <span className="tk">co.</span>
        </div>
        <div>
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="search course"
            className="naviIn"
          ></input>
        </div>
        <div>categories</div>
        <div>
          <Link className="nav-link active" to="/cart">
            <IoCartOutline className="fs-3" />
          </Link>
        </div>
        <div>
          <Link className="nav-link active" to="/login">
            login
          </Link>
        </div>
        <div>
          <Link className="nav-link active" to="/signup">
            signup
          </Link>
        </div>
      </ul>
      <div className="naviBa">
        <img
          src={banner}
          style={{ height: "500px", width: "100%", objectFit: "fill" }}
        />
      </div>
    </div>
  );
}

export default Navbar;
