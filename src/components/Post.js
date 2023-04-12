import React , {useEffect, useState} from 'react';
import { FaCaretDown, FaUserPlus } from 'react-icons/fa';
import {useStateValue} from "../redux/StateProvider.js";

const Post = () => {

   const [{ post, user }, dispatch] = useStateValue();

  return (
    <div className='container-fluid flex flex-col justify-content-center align-items-center bg-white py-4'>
      {/*  Post header */}
      <div className="container d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-50" id="postHeader" >
          <div className="col-md-6 d-flex flex-row justify-content-start align-items-end childPostHidden">
             
               <li className='mx-3' >
                <button type='button'  className='border-end-0 border-top-0 border-start-0 bg-transparent py-2' id='allPost'>
                   AllPost(32posts)
                </button> 
               </li>
               <li className='mx-3' >
                <button type='button'  className='border-0 bg-transparent py-2' id="article" >
                   Article
                </button> 
               </li>
               <li className='mx-3' >
                <button type='button'  className='border-0 bg-transparent py-2' id="event" >
                   Event
                </button> 
               </li>
               <li className='mx-3'  >
                <button type='button'  className='border-0 bg-transparent py-2' id="education" >
                  Education
                </button> 
               </li>
               <li className='mx-3' >
                <button type='button'  className='border-0 bg-transparent py-2' id="job" >
                   Job
                </button> 
               </li>
             
          </div>
          <div className='col-md-6 d-flex justify-content-end align-items-center py-2'>
             <button type='button'  className='p-2 btn-light border-0 mx-1 fw-normal fs-6'>
                 Write a Post <FaCaretDown />
             </button>
             <button type='button'  className='p-2 btn-primary border-0  mx-1 fw-normal fs-6'>
             <FaUserPlus className="mx-1" />Join Group 
             </button>
          </div>
      </div>
      {/*  post header ends here */}
      <div className="container d-flex  justify-content-center align-items-center" >
           <div class="col-sm-8 d-flex flex-column justify-content-center align-items-center">
                 {/* postCard */}
           </div>
           <div class="col-sm-4 d-flex flex-column justify-content-center align-items-center">
                 <div className="container">
                    <Fa
                 </div>
           </div>

      </div>
      

    </div>
  )
}

export default Post;