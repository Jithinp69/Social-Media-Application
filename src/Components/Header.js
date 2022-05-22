import React from "react";
import logo from "../logo.png";
import "../Components/Header.css";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand navbar-custom" href="#">
          <img src={logo} className="logo" />
        </a>
      </div>
    </nav>
  );
}
