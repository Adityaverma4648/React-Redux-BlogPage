import React from "react";
import {Link} from "react-router-dom";
import {FaSearch} from 'react-icons/fa';


const Navbar = () => {
  return (
    <>
    <nav className="Navbar bg-white top-0 left-0 right-0 position-fixed container-fluid d-flex flex-row justify-content-between px-4 py-2 align-items-center shadow-sm">
      <div className="col-md-3 col-sm-4 navbarChild d-none d-sm-block d-flex justify-content-start align-items-center fw-bold fs-4">
        LOGO
      </div>
      <div className="col-sm-3 navbarChild d-none d-sm-block d-flex flex-row justify-content-center align-items-center">
        <div className="container bg-light rounded-5 form-group d-flex flex-row justify-content-center align-items-center">
          <label htmlFor="search" className="me-2">
            <FaSearch color="7A7A7A" />
          </label>
          <input type="text"
            className="form-control bg-transparent border-0" name="search" id="search" aria-describedby="helpSearch" placeholder="Search for your favourite groups in ATG" />
        </div>
      </div>
      <div className="col-sm-3 navbarChild d-flex justify-content-sm-center justify-content-end align-items-center" >
       <div className="btn btn-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         <button className="btn btn-transparent border-0 dropdown-toggle fw-bolder" type="button" data-toggle="dropdown">
               Create account. 
               <span className="fw-bold text-primary" >
                It's Free!
               </span>
           </button>
           <ul className="dropdown-menu w-20 h-40" aria-labelledby="dropdownMenuButton1">
               <Link to="/signUp" className="d-flex justify-content-start h-50 w-100 ">
                  <li  className="border-bottom border-secondary border-opacity-50" >
                    SignUp
                 </li>
               </Link>

                 <Link to="/login" className="d-flex justify-content-start h-50 w-100 " >
                   <li className="border-bottom border-secondary border-opacity-50" >
                  Login
                  </li>
                 </Link>
          </ul>
        </div>  
      </div>
    </nav>
    </>
  );
};

export default Navbar;
