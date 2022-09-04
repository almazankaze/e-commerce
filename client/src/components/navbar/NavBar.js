import React from "react";
import { Link } from "react-router-dom";
import DevicesIcon from "@mui/icons-material/Devices";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "../SearchBar/SearchBar";

import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container navbar-top">
        <div className="navbar-top-left">
          <div className="navbar-comp">
            <DevicesIcon className="navbar-logo" />
            <h1>MeTech</h1>
          </div>
        </div>

        <div className="navbar-top-middle">
          <SearchBar />
        </div>

        <div className="navbar-top-right">
          <FavoriteBorderIcon className="navbar-icon" />
          <ShoppingCartOutlinedIcon className="navbar-icon" />
          <div className="navbar-top-dropdown">
            <h4>MyAccount</h4>
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        <ul class="container navbar-links">
          <li>
            <Link className="nav-link" to="/about">
              Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              Desktops
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              Notebooks
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              Smartphones
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              FAQ'S
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
