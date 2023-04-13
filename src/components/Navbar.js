import React,{useState} from "react";
import logo from "../assets/logo.png";
import {FaSearch , FaTimesCircle} from 'react-icons/fa';
import { useStateValue } from "../redux/StateProvider";
const Navbar = () => {


  const [{post,user},dispatch] = useStateValue();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [postType , setPostType] = useState("");


  const handleTitle = (e)=>{
     setTitle(e.target.value);
  }

  const handleDesc = (e)=>{
     setDesc(e.target.value);
  }

  const handleImageLink = (e)=>{
     setImageLink(e.target.value);
  }

  const handlePostType = (e)=>{
    setPostType(e.target.value);
  }

  const handleSubmission = (e)=>{

    const date = new Date();
    const userData = localStorage.getItem("userData");

    dispatch({
      type: "ADD_TO_POST",
      item: {
        title : title,
        desc : desc,
        imageLink : imageLink,
        postType : postType,
        userData : "",
        currentDateTime : date,
      },
    });
    e.preventDefault();
  }
  

  return (
    <>

<div className="modal fade" id="signUp" tabindex="-1" aria-labelledby="signUp" aria-hidden="true">
  <div className="modal-dialog  modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="container-fluid d-flex p-1 justify-content-end align-items-center">
            <FaTimesCircle color='white' />
          </div>
          <form onSubmit={handleSubmission} className="bg-white container-fluid d-flex flex-column justify-content-center align-items-center p-2">
          
              <div className='container-fluid d-flex justify-content-start px-2 h5 align-items-center fw-bolder' >
                  Write a post!
              </div>
              
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter post title' onChange={e=>handleTitle(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter post description' onChange={e=>handleDesc(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Example: https://linkName.com
             </div>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter image Link' onChange={e=>handleImageLink(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Select post type :
             </div>
             <select className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' onChange={e=>handlePostType(e)} required>
                <option value="article" className='py-2' >article</option>
                <option value="education" className='py-2' >education</option>
                <option value="job" className='py-2' >job</option>
                <option value="event" className='py-2' >event</option>
             </select>
             </div>
             <div className="container-fluid">
               <input type="submit" className='btn btn-primary' />
             </div>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    <nav className="Navbar bg-white top-0 left-0 right-0 position-fixed container-fluid d-flex flex-row justify-content-between px-4 py-2 align-items-center">
      <div className="col-md-3 col-sm-4 navbarChild d-none d-sm-block d-flex justify-content-start align-items-center">
        <img id="logoImage" className="container" src={logo} alt="logo" />
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
                 <button type="button" className="border-0 bg-transparent dropdown-item">Login</button>
               </li>
          </ul>
        </div>  
      </div>
    </nav>
    </>
  );
};

export default Navbar;
