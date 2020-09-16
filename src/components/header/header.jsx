import React from "react";
import { Link } from "react-router-dom";

export default function PrimarySearchAppBar() {
  return (
    <div className="appHeader bg-white text-light">
      <div className="left">
        <Link to="/" className="headerButton">
          <div className="pageTitle">
            <img
              style={{ height: "300px", width: "250px" }}
              src="images/logo1.png"
              alt="logo"
              className="logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
