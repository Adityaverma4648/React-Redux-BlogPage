import logo from "../assets/logo.png";
import {FaSearch} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="Navbar bg-white top-0 left-0 right-0 position-fixed container-fluid d-flex flex-row justify-content-between px-4 py-2 align-items-center">
      <div className="col-md-3 col-sm-4 navbarChild navbarChildHidden d-flex justify-content-start align-items-center">
        <img id="logoImage" className="container" src={logo} alt="logo" />
      </div>
      <div className="col-sm-3 navbarChild navbarChildHidden d-flex flex-row justify-content-center align-items-center">
        <div className="container bg-light rounded-5 form-group d-flex flex-row justify-content-center align-items-center">
          <label htmlFor="search" className="me-2">
            <FaSearch color="7A7A7A" />
          </label>
          <input type="text"
            className="form-control bg-transparent border-0" name="search" id="search" aria-describedby="helpSearch" placeholder="Search for your favourite groups in ATG" />
        </div>
      </div>
      <div className="col-sm-3 navbarChild d-flex justify-content-center align-items-center" >
       <div className="dropdown">
         <button className="btn btn-transparent border-0 dropdown-toggle fw-bolder" type="button" data-toggle="dropdown">
               Create account. 
               <span className="fw-bold text-primary" >
                It's Free!
               </span>
               <span className="caret"></span>
           </button>
           <ul className="dropdown-menu">
               <li><a href="#">SignUp</a></li>
               <li><a href="#">CSS</a></li>
               <li><a href="#">JavaScript</a></li>
          </ul>
        </div>  
      </div>
    </nav>
  );
};

export default Navbar;
