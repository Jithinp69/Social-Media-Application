import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../Components/Header.css";

export default function Header() {
  return (

    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-custom" to="/">
          <img src={logo} className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto my-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="fa fa-home" aria-hidden="true" title="Home" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/friends">
                Friends
              </Link>
            </li>


          </ul>

        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       <img className="logo" src={logo} alt="logo"/>
    //     </Link>
    /* <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
     */
    // </div>
    // </nav>
  );
}
