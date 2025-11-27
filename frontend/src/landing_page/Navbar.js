import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2 d-flex justify-content-between align-items-center">
        {/* ----- Logo Section ----- */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "130px" }} // Adjust width as you like
            alt="Logo"
          />
        </Link>

        {/* ----- Right Side Navigation Section ----- */}
        <div className="d-flex align-items-center">
          <ul className="navbar-nav d-none d-lg-flex flex-row me-3">
            <li className="nav-item me-4">
              <Link className="nav-link active" aria-current="page" to="/Signup">
                Signup
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/Support">
                Support
              </Link>
            </li>
          </ul>

          <button
            className="navbar-toggler d-block shadow-none"
            type="button"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
