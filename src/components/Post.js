import React , { useState} from 'react';
import { FaCaretDown, FaTimesCircle ,  FaUserPlus , FaMapMarkerAlt, FaPen, FaTimes , FaInfoCircle, FaThumbsUp } from 'react-icons/fa';
import {useStateValue} from "../redux/StateProvider.js";
import ModalContainer from '../Pages/ModalContainer.js';
import PostCard from './PostCard.js';



const Post = () => {

   const [{ post, user }, dispatch] = useStateValue();
   const [alter, setAlter] = useState(true);
   const [location, setLocation] = useState("");
   const [filter, setFilter] = useState();
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



   const postArray  = [{
      
         id:1,
         title : "What if famous brands had regular fonts? Meet RegulaBrands!",
         desc:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
         postType : "Event",
         imageLink : "https://www.sciencealert.com/images/2021-11/processed/PineForestInMist_1024.jpg",
         userData : {
            userName : "AdityaVerma",
            userAvatar : "https://lh3.googleusercontent.com/xKDOhVLYUiI9ghtGpTIELTzX11KlUHtTfP72afnW6XNF8qPzVCtz-9ODSABX374Lm2iOTp3pmeus-_QOcr65OJWx57KqWajcluXrtfA", 
         },
         currentDateTime : new Date(),
         
      
   },{
      id:2,
         title : "What if famous brands had regular fonts? Meet RegulaBrands!",
         desc:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
         postType : "Education",
         imageLink : "https://lh3.googleusercontent.com/cxyGCMeTgCjrEbYbRjrI-F3NV9wgjjwC8-EDedPW6GAsMI_muScRmtGoVmEI0EoUKUnkF7osSGtW-Lhuwhh55VBmX4kalOFfiM4H2dzF-Q" ,
         userData : {
            userName : "Aditya",
            userAvatar : "https://lh3.googleusercontent.com/xKDOhVLYUiI9ghtGpTIELTzX11KlUHtTfP72afnW6XNF8qPzVCtz-9ODSABX374Lm2iOTp3pmeus-_QOcr65OJWx57KqWajcluXrtfA", 
         },
         currentDateTime : new Date(),
   },{
      id:3,
         title : "What if famous brands had regular fonts? Meet RegulaBrands!",
         desc:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
         postType : "Job",
         imageLink : "https://lh3.googleusercontent.com/wdS_zcbhoZ-QSVcLvloDJML_6DMt5-uj5egRc7nxcE76RjMJeh9c7F-WnVo-i46rdneQK2kXvk6nzir9HRwU6TVxHiSCzBSwYnRsyd8",
         userData : {
            userName : "Aditya",
            userAvatar : "https://lh3.googleusercontent.com/xKDOhVLYUiI9ghtGpTIELTzX11KlUHtTfP72afnW6XNF8qPzVCtz-9ODSABX374Lm2iOTp3pmeus-_QOcr65OJWx57KqWajcluXrtfA", 
         },
         currentDateTime : new Date(),
   }]

   const groupArray = [{
      id: 1,
      avatarLink : "https://lh3.googleusercontent.com/xKDOhVLYUiI9ghtGpTIELTzX11KlUHtTfP72afnW6XNF8qPzVCtz-9ODSABX374Lm2iOTp3pmeus-_QOcr65OJWx57KqWajcluXrtfA",
      groupName : "Abomination"
   },{
      id: 2,
      avatarLink : "https://lh3.googleusercontent.com/xKDOhVLYUiI9ghtGpTIELTzX11KlUHtTfP72afnW6XNF8qPzVCtz-9ODSABX374Lm2iOTp3pmeus-_QOcr65OJWx57KqWajcluXrtfA",
      groupName : "Superman"
   },{
      id: 3,
      avatarLink : "https://lh3.googleusercontent.com/xKDOhVLYUiI9ghtGpTIELTzX11KlUHtTfP72afnW6XNF8qPzVCtz-9ODSABX374Lm2iOTp3pmeus-_QOcr65OJWx57KqWajcluXrtfA",
      groupName : "Tony Stark"
   },{
      id: 4,
      avatarLink : "https://lh3.googleusercontent.com/xKDOhVLYUiI9ghtGpTIELTzX11KlUHtTfP72afnW6XNF8qPzVCtz-9ODSABX374Lm2iOTp3pmeus-_QOcr65OJWx57KqWajcluXrtfA",
      groupName : "Wonder Woman"
   }]

   // handle location submissions
   
   // const handleSubmission = async (e) =>{
   //    dispatch({
   //    type: "ADD_TO_BASKET",
   //    item: {
   //      location : location
   //    },
   //  });
   //  e.preventDefault();
   // }

  
   //  location value setter function
   const onInputChange = (e) =>{
         setAlter(false);
         setLocation(e.target.value);
   }
   //  altering icon functions
   const alterIcon = (e) =>{
        setAlter(false);
   }
   const alterBack = (e) =>{
      if(!location || location === ""){
        setAlter(true); 
      }
   }

 

//    filter Buttons functions
  const handleFilterButtons = (e)=>{
     setFilter(e.target.id);
     e.target.setAttribute("className","active");
     alert(filter);
  }

  const handleFilterOptions = (e) =>{
    setFilter(e.target.value);
  }
  return (
   <>
      {/*  modals */}
   
  
      <div className="modal fade" id="createPost" tabindex="-1" aria-labelledby="createPost" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">SignUp</h5>
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

      {/*  modal ends here */}
    <div className='container-fluid flex flex-col justify-content-center align-items-center bg-white py-4'>
      {/*  Post header */}
      <div className="container d-flex flex-row justify-content-between align-items-center border-bottom border-secondary border-opacity-50 " >
          <div className="col-sm-6 d-md-block d-none d-flex flex-row justify-content-start align-items-center">
               <ul className='d-flex flex-row justify-content-start align-items-center' >
               <li className='mx-3' >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className='py-4 border-end-0 border-top-0 border-start-0 bg-transparent py-2 fw-bold' id='all'>
                   AllPost(32posts)
                </button> 
               </li>
               <li className='mx-3' >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className='py-4 border-0 bg-transparent py-2' id="article" >
                   Article
                </button> 
               </li>
               <li className='mx-3' >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className='py-4 border-0 bg-transparent py-2' id="event" >
                   Event
                </button> 
               </li>
               <li className='mx-3'  >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className='py-4 border-0 bg-transparent py-2' id="education" >
                  Education
                </button> 
               </li>
               <li className='mx-3' >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className='py-4 border-0 bg-transparent py-2' id="job" >
                   Job
                </button> 
               </li>
               </ul>
             
          </div>
          <div className='col-sm-6 d-md-block d-none py-2'>
            <div className='container-fluid d-flex flex-row justify-content-end align-items-center' >
            <button type='button' data-toggle="modal"
                data-target="#createPost"  className='p-2 btn-light border-0 mx-1 fw-normal fs-6'>
                 Write a Post <FaCaretDown />
             </button>
             <button type='button'  className='p-2 bg-primary text-white border-0  mx-1 fw-normal fs-6'>
             <FaUserPlus className="mx-1" />Join Group 
             </button>
            </div>
          </div>
      </div>
      {/*  Post header responsive  */}
      <div className="container d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-50 d-md-none d-block "  >
          <div className="col-md-6 d-flex flex-row justify-content-start align-items-center childPostHidden fs-5 fw-bolder">
             Posts : {filter} ({postArray.length})
          </div>
          <div className='col-md-6 d-flex justify-content-end align-items-center py-2'>
             <select className='p-2' onChange={handleFilterOptions} name="filterOptions">
                 <option value="all">all</option>
                 <option value="job">job</option>
                 <option value="education">education</option>
                 <option value="events">events</option>
             </select>
          </div>
      </div>
      {/*  post header responsive ends here */}
      <div className="container-sm container-fluid d-flex justify-content-center align-items-start py-4" >
           <div className="col-md-9 col-sm-12 d-flex flex-column justify-content-center align-items-center py-2">
                 {postArray.map((d)=>{
                     return <PostCard className="container-fluid d-flex flex-column justify-content-center align-items-center" key = {d.id} id = {d.id} title={d.title} desc = {d.desc} imageLink = {d.imageLink} postType={d.postType} publishDate = {d.currentDateTime} publisher = {d.userData} />
                 })}
           </div>
           <div className="col-sm-3 d-flex flex-column justify-content-start align-items-center py-4 d-md-block d-none"  >
                 <form onSubmit={handleSubmission} className="container py-1 d-flex flex-row justify-content-between align-items-center border-bottom">
                    <div className='d-flex justify-content-center align-items-center' >
                    <label className='mx-1' htmlFor="location">
                    <FaMapMarkerAlt />
                    </label>
                    <input type="text" className='p-2 border-0 bg-transparent' placeholder='Eg. Noida ,India' onMouseOut = {alterBack} onClick={alterIcon} onChange={onInputChange} />
                    </div>
                    <div className='mx-1' >
                     <button type='button' className='border-0 bg-transparent' >
                     {alter ? <FaPen />: <FaTimes /> }
                     </button>
                    </div>
                 </form>

                 {/*  note|message gray block  */}
                 <div className="container py-1 d-flex flex-row justify-content-between align-items-start text-secondary py-3">
                      <div className='mx-1' >
                        <FaInfoCircle />
                      </div>
                     <small className='text-right' >
                     Your location will help us serve better and extend a personalised experience.
                     </small>
                 </div>
                 <div className="container-fluid py-1 d-flex flex-column justify-content-between align-items-start text-secondary py-5">

                      <div className="container-fluid d-flex justify-content-start align-items-center">
                          <FaThumbsUp className='me-1' />
                          <div className='fw-bold text-black' >
                             REOCOMMENDED GROUPS
                          </div>
                      </div>
                      <div className='py-5' >
                      {groupArray.map((d)=>{
                         return <div className='container-fluid d-flex justify-content-between align-items-center p-2 text-black'>
                                    <div className='col-sm-6 d-flex' >
                                      <img src={d.avatarLink} className='rounded-circle me-2' style={{height:"30px", width : "30px"}} alt="groupAvatar"/>
                                      <div className='ms-1 fw-light' >
                                           {d.groupName}
                                      </div>
                                    </div>
                                    <div className='d-flex' >
                                       <button type='button' className='btn btn-ouline-secondary bg-light rounded-5 fw-bolder' >
                                           Follow
                                       </button>
                                    </div>
                                </div>
                             })}
                      </div>
                      <div className="container d-flex justify-content-end align-items-center">
                          <button type='button' className='btn border-0 text-primary bg-transparent'>
                            See More..
                          </button>
                  </div>
                 </div>
                 
            </div>
         </div>
    </div>
    </>
  )
}

export default Post;