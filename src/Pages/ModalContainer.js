import React,{useEffect, useState} from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { useStateValue } from '../redux/StateProvider.js';


const ModalContainer = ({handleVisibility}) => {

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
    <div className='ModalContainer d-flex justify-content-center align-items-center'  >
        <div className='Modal d-flex flex-column justify-content-start align-items-center'>
          <div className="container-fluid d-flex p-1 justify-content-end align-items-center">
            <FaTimesCircle color='white' onClick={handleVisibility(false)} />
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

    </div>
    </>
  )
}

export default ModalContainer