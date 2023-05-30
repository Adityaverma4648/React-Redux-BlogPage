import React,{useEffect, useState} from 'react';
import {FaEllipsisH, FaEye, FaShareAlt} from "react-icons/fa";
import { useStateValue } from '../redux/StateProvider';

const PostCard = (props) => {

  const [postType, setPostType] = useState();

  const handlePostType = (post) =>{
      setPostType(post);
  }

  useEffect(()=>{
      handlePostType(props.postType);
  },[props.postType])


  return (
    <div className='PostCard container-fluid-sm shadow-sm mb-3 pb-4 d-flex flex-column justify-content-start align-items-center' >
        <div className="row d-flex justify-content-start align-items-center postCardImageContainer overflow-hidden">
            <img className='container-fluid' src={props.imageLink} alt="imageLink" />
        </div>
        <div className='container-fluid mt-2 h-50 d-flex flex-column justify-content-between align-items-center'>
            <div className=' container-fluid d-flex flex-column justify-content-start align-items-center' >
            <div className='container-fluid fw-bolder my-1'  id="activty">
               {props.postType}
            </div>
            <div className='container-fluid d-flex justify-content-between align-items-center fs-5 fw-bold'>
               <div  >
               {props.title}
               </div>
               <div >
               <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                          <FaEllipsisH color='#000' />
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="void(0)">edit</a></li>
                        <li><a className="dropdown-item" href="void(0)">Report</a></li>
                        <li><a className="dropdown-item" href="void(0)">option 3</a></li>
                     </ul>
                    </div>
               </div>
            </div>
            <div className="container-fluid fw-light text-secondary" style={{fontSize:"19px"}}>
                {props.desc}
            </div>
            {props.postType === "Job" &&
            <div className="container-fluid py-2 ">
                <button type='button' className='btn bg-transparent btn-outline-secondary text-danger container-fluid fw-bolder'>
                   Apply on Timesjobs
                </button>
            </div>
            }

            {props.postType === "Event" &&
            <div className="container-fluid py-2 ">
                <button type='button' className='btn bg-transparent btn-outline-secondary text-success container-fluid fw-bolder'>
                   Visit Website
                </button>
            </div>
            }
            </div>
            
            <div className="container-fluid d-flex flex-sm-row flex-column justify-content-between align-items-center">
                <div className='container d-flex justify-content-start align-items-center'  >
                  <div className='d-flex flex-row justify-content-between align-items-center' id="avatar">
                    <img src="#" className='bg-danger rounded-circle me-2' style={{height:"30px", width : "30px"}} alt="userAvatar"/>
                     <div className='fw-bolder' >
                        {/* {props.publisher.userName} */}
                        userName
                     </div>
                  </div>
                </div>
                <div className='container d-flex justify-content-end align-items-center' >
                   <div className='container d-flex flex-row justify-content-between justify-content-sm-end align-items-center' >
                        <div className='me-2' id='Views'>
                           <FaEye className='me-2' />
                           1.4K Views
                        </div>
                        <div className='' >
                        <button type='buttton' className='btn btn-light rounded-0 d-flex justify-content-center align-items-center ' >  
                           <FaShareAlt className='me-2' color='#000' />
                           <div className='d-block d-sm-none' >
                                Share
                            </div>
                        </button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard