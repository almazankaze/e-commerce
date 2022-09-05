import React from "react";
import { Link } from "react-router-dom";
import DevicesIcon from "@mui/icons-material/Devices";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "../SearchBar/SearchBar";

import { useGlobalContext } from "../../context";

import "./navbar.css";

const NavBar = () => {
  const { setShowMobileSearch, showMobileSearch } = useGlobalContext();

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
          <div className="icon-container">
            <FavoriteBorderIcon className="navbar-icon" />
            <span className="badge"> 9 </span>
          </div>

          <div className="icon-container">
            <ShoppingCartOutlinedIcon className="navbar-icon" />
            <span className="badge"> 9+ </span>
          </div>
          <div>
            <Link className="link text-white" to="/About">
              Login
            </Link>
          </div>
        </div>

        <div className="mobile-nav-top-right">
          <SearchIcon
            className="navbar-icon"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          />
          <MenuIcon className="navbar-icon" />
        </div>
      </div>

      <div
        className={
          showMobileSearch ? "mobile-navsearch-show" : "mobile-navsearch"
        }
      >
        <SearchBar />
      </div>

      <div className="navbar-bottom">
        <ul className="container navbar-links">
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
