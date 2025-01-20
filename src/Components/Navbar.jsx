import { useState } from "react";

const Navbar = ({ theme, themeChange, text }) => {
  return (
    <nav className={theme ? "navbar bg-success" : "navbar bg-dark"}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light d-flex justify-content-between w-100">
          <h1 className="">Khata-Book</h1>
          <button
            className={
              theme
                ? "btn btn-dark   text-light  fw-bold"
                : "btn btn-light  text-dark fw-bold"
            }
            onClick={() => themeChange()}
          >
            {theme ? "Dark Theme " : "Light Thene"}
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
