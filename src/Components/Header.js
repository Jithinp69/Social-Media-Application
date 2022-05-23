import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import "../Components/Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav navbarsections">
              <Link to="/home">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>

              <Link to="/profile">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Profile
                  </a>
                </li>
              </Link>
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>
            </ul>
            <div className="welcome">
              <h6>Welcome Tiny</h6>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
