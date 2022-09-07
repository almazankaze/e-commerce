import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HardwareOutlinedIcon from "@mui/icons-material/HardwareOutlined";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import { useGlobalContext } from "../../context";

import "./sidebar.css";

const SideBar = () => {
  const { showMenu } = useGlobalContext();

  return (
    <div className={showMenu ? "sidebar show" : "sidebar"}>
      <div className="sidebar-logo-container">
        <h2>MeTech</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link className="link sidebar-item" to="/home">
            <HomeOutlinedIcon className="sidebar-icon" /> Home
          </Link>
        </li>
        <li>
          <Link className="link sidebar-item" to="/home">
            <PermIdentityOutlinedIcon className="sidebar-icon" /> My Account
          </Link>
        </li>
        <li>
          <Link className="link sidebar-item" to="/home">
            <FavoriteBorderOutlinedIcon className="sidebar-icon" /> Wishlist
          </Link>
          <div className="side-badge">9+</div>
        </li>
        <li>
          <Link className="link sidebar-item" to="/home">
            <ShoppingCartOutlinedIcon className="sidebar-icon" /> Shopping Cart
          </Link>
          <div className="side-badge">9+</div>
        </li>
        <li className="side-dropdown">
          <div className="link sidebar-item">
            <HardwareOutlinedIcon className="sidebar-icon" /> Hardware
          </div>
          <ArrowDropDownOutlinedIcon className="fill-main-color" />
        </li>
        <li className="side-dropdown">
          <div className="link sidebar-item" to="/home">
            <MouseOutlinedIcon className="sidebar-icon" /> Peripherals
          </div>
          <ArrowDropDownOutlinedIcon className="fill-main-color" />
        </li>
        <li className="side-dropdown">
          <div className="link sidebar-item" to="/home">
            <ComputerOutlinedIcon className="sidebar-icon" /> Computers
          </div>
          <ArrowDropDownOutlinedIcon className="fill-main-color" />
        </li>

        <li>
          <Link className="link sidebar-item" to="/home">
            <MonitorOutlinedIcon className="sidebar-icon" /> Monitors
          </Link>
        </li>
        <li>
          <Link className="link sidebar-item" to="/home">
            <PrintOutlinedIcon className="sidebar-icon" /> Printers
          </Link>
        </li>
        <li>
          <Link className="link sidebar-item" to="/home">
            <SmartphoneOutlinedIcon className="sidebar-icon" /> Smartphones
          </Link>
        </li>
        <li>
          <Link className="link sidebar-item" to="/home">
            <HelpOutlineOutlinedIcon className="sidebar-icon" /> FAQ's
          </Link>
        </li>
        <li>
          <Link className="link sidebar-item" to="/home">
            <PhoneOutlinedIcon className="sidebar-icon" /> Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
