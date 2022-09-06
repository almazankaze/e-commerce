import React from "react";
import { Link } from "react-router-dom";
import DevicesIcon from "@mui/icons-material/Devices";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchBar from "../SearchBar/SearchBar";

import { useGlobalContext } from "../../context";

import "./navbar.css";

const NavBar = () => {
  const { setShowMobileSearch, showMobileSearch } = useGlobalContext();
  const { setShowMenu, showMenu } = useGlobalContext();

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
          <MenuIcon
            className="navbar-icon"
            onClick={() => setShowMenu(!showMenu)}
          />
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
          <li className="submenu">
            <div className="nav-link">Products</div>
            <ul className="dropdown-menu">
              <li className="sidemenu">
                <Link className="sub-link" to="/components">
                  <div className="dot"></div>Pc components
                </Link>
                <PlayArrowIcon className="nav-arrow-icon" />
              </li>
              <li className="sidemenu">
                <Link className="sub-link" to="/about">
                  <div className="dot"></div>Peripherals
                </Link>
                <PlayArrowIcon className="nav-arrow-icon" />
              </li>
              <li>
                <Link className="sub-link" to="/about">
                  <div className="dot"></div>Monitors
                </Link>
              </li>
              <li>
                <Link className="sub-link" to="/about">
                  <div className="dot"></div>Printers
                </Link>
              </li>
              <li className="sidemenu">
                <Link className="sub-link" to="/about">
                  <div className="dot"></div>Gaming
                </Link>
                <PlayArrowIcon className="nav-arrow-icon" />
              </li>
              <li>
                <Link className="sub-link" to="/about">
                  <div className="dot"></div>Tablets
                </Link>
              </li>

              <li className="sidemenu">
                <Link className="sub-link" to="/about">
                  <div className="dot"></div>Software
                </Link>
                <PlayArrowIcon className="nav-arrow-icon" />
              </li>
            </ul>
          </li>
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/desktops">
              Desktops
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/notebooks">
              Notebooks
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/smartphones">
              Smartphones
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/faq">
              FAQ'S
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
