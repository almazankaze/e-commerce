import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context";

import "./sidebar.css";

const SideBar = () => {
  const { showMenu } = useGlobalContext();

  return (
    <div className={showMenu ? "sidebar show" : "sidebar"}>
      <ul className="sidebar-menu">
        <li>
          <Link className="link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            My Account
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Wishlist
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Shopping Cart
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Hardware
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Peripherals
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Computers
          </Link>
        </li>

        <li>
          <Link className="link" to="/home">
            Monitors
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Printers
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Smartphones
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            FAQ's
          </Link>
        </li>
        <li>
          <Link className="link" to="/home">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
