import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Dropdown from "../Dropdown";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div id="header-container">
      <div id="header-body">
        <Link to="/">
          <span id="title">
            <img id="logo" src="../logo.png" alt="logo" />
            <span id="name">COZ Shopping</span>
          </span>
        </Link>
        <div id="menu">
          <div onClick={() => setOpen(!open)}>
            <HiMenu size="35" />
          </div>
        </div>
      </div>
      <div id="dropdown-modal">{open ? <Dropdown /> : ""}</div>
    </div>
  );
}

export default Header;
