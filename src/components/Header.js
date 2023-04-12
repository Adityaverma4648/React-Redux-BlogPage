import React from "react";
import Navbar from "../components/Navbar.js";

const Header = () => {
  return (
    <header className="Header container-fluid d-flex flex-col justify-content-center align-items-center">
      <Navbar />
      <div className="position-relative d-flex justify-content-start align-items-end" >
            <div className="row flex justify-content-start align-items-center bg-warning " id="BackgroundImage" >
            </div>
            <div className="container-fluid mb-5 position-absolute text-white"  >
                <div className="container" >
                  <h1 className="fw-bold" >
                    Computer Engineers
                  </h1>
                  <span className="fs-5 fw-regular" >
                    142,765 Computer Engineers follow this
                  </span>
                </div>
           </div>
      </div>

    </header>
  );
};
export default Header;
