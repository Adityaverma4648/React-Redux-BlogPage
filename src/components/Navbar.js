import React,{useState} from "react";
import logo from "../assets/logo.png";
import {FaSearch , FaTimesCircle} from 'react-icons/fa';
import { useStateValue } from "../redux/StateProvider";
const Navbar = () => {


  const [{post,user},dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e)=>{
     setUserName(e.target.value);
  }

  const handleEmail = (e)=>{
     setEmail(e.target.value);
  }

  const handlePassword = (e)=>{
     setPassword(e.target.value);
  }
  
  const handlePasswordVisibility = (e) =>{
    var password = document.getElementById("password");
    var passwordLogin = document.getElementById("passwordLogin");

    if(e.target.checked){
      password.setAttribute("type" , "text");
      passwordLogin.setAttribute("type","text");
    }else{
      password.setAttribute("type" , "password");
      passwordLogin.setAttribute("type","password");
    }
  }

  const handleSubmission = (e)=>{
    dispatch({
      type: "ADD_USER",
      item: {
        userName : userName,
        email : email,
        password : password,
      },
    });
    e.preventDefault();
  }
  

  return (
    <>
        {/* Modal signUp */}
        <div className="modal fade" id="signUp" tabindex="-1" aria-labelledby="signUp" aria-hidden="true">
        <div className="modal-dialog  modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          <div className="modal-body">
             <form onSubmit={handleSubmission} className="bg-white container-fluid d-flex flex-column justify-content-center align-items-center p-2">
          
              <div className='container-fluid d-flex justify-content-start px-2 h5 align-items-center fw-bolder' >
                  SignUp
              </div>
              
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter User Name' name="userName" onChange={e=>handleUserName(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="email" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter email' name="email" onChange={e=>handleEmail(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>

             <input type="password" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter password' id="password" name="password" onChange={e=>handlePassword(e)}  autoComplete="on" required />
             </div>
             <div className='container-fluid d-flex flex-row justify-content-end align-items-center mb-1 py-1'>
                <label htmlFor="visibility" className="fw-bolder fs-6">
                   Show Password
                </label>
                <input type="checkbox" className='border border-secondary border-opacity-50 bg-transparent p-2 ms-2' placeholder='Enter password' name="visibility" onChange={e=>handlePasswordVisibility(e)} required />
             </div>
             <div className="container-fluid">
               <input type="submit" className='btn btn-primary' />
             </div>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
        </div>

        <div className="modal fade" id="login" tabindex="-1" aria-labelledby="login" aria-hidden="true">
        <div className="modal-dialog  modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              Let's learn, share & inspire each other with our passion for computer engineering. Login now 🤘🏼
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          <div className="modal-body">
             <form onSubmit={handleSubmission} className="bg-white container-fluid d-flex flex-column justify-content-center align-items-center p-2">
          
              <div className='container-fluid d-flex justify-content-start px-2 h5 align-items-center fw-bolder' >
                  Login
              </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="email" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter email' name="email" onChange={e=>handleEmail(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>

             <input type="password" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter password' id="passwordLogin" name="password" onChange={e=>handlePassword(e)} autoComplete="on" required />
             </div>
             <div className='container-fluid d-flex flex-row justify-content-end align-items-center mb-1 py-1'>
                <label htmlFor="visibility" className="fw-bolder fs-6">
                   Show Password
                </label>
                <input type="checkbox" className='border border-secondary border-opacity-50 bg-transparent p-2 ms-2' placeholder='Enter password' name="visibility" onChange={e=>handlePasswordVisibility(e)} required />
             </div>
             <div className="container-fluid">
               <input type="submit" className='btn btn-primary' />
             </div>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
        </div>



    <nav className="Navbar bg-white top-0 left-0 right-0 position-fixed container-fluid d-flex flex-row justify-content-between px-4 py-2 align-items-center">
      <div className="col-md-3 col-sm-4 navbarChild d-none d-sm-block d-flex justify-content-start align-items-center fw-bold fs-4">
        {/* <img id="logoImage" className="container" src={logo} alt="logo" /> */}
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
       <div class="btn btn-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
         <button className="btn btn-transparent border-0 dropdown-toggle fw-bolder" type="button" data-toggle="dropdown">
               Create account. 
               <span className="fw-bold text-primary" >
                It's Free!
               </span>
           </button>
           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <li class="border-bottom border-secondary border-opacity-50" >
                 <button type="button" className="border-0 bg-transparent dropdown-item" data-bs-toggle="modal" data-bs-target="#signUp" >SignUp</button>
                 </li>
               <li>
                 <button type="button" data-bs-toggle="modal" data-bs-target="#login" className="border-0 bg-transparent dropdown-item">Login</button>
               </li>
          </ul>
        </div>  
      </div>
    </nav>
    </>
  );
};

export default Navbar;
