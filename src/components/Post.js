import React , { useEffect, useState} from 'react';
import { FaCaretDown, FaTimesCircle ,  FaUserPlus , FaMapMarkerAlt, FaPen, FaTimes , FaInfoCircle, FaThumbsUp } from 'react-icons/fa';
import {useStateValue} from "../redux/StateProvider.js";
import PostCard from './PostCard.js';



const Post = () => {

   const [{ post, user }, dispatch] = useStateValue();
   const [alter, setAlter] = useState(true);
   const [location, setLocation] = useState("");
   const [filter, setFilter] = useState("all");
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
   const [image, setImage] = useState("");
   const [postType , setPostType] = useState("");
   const [website, setWebsite] = useState("");
 
 
   const handleTitle = (e)=>{
      setTitle(e.target.value);
   }
 
   const handleDesc = (e)=>{
      setDesc(e.target.value);
   }
 
   const handleImage = (e)=>{
      setImage(e.target.value);
   }
 
   const handlePostType = (e)=>{
     setPostType(e.target.value);
   }
   
   const handleWebsite = (e)=>{
      setWebsite(e.target.value);
   }

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
   //    type: "ADD_TO_POST",
   //    item: {
   //       id : post.length + 1, 
   //       title : title,
   //       desc  : desc,
   //       image : image,
   //       postType : postType,
   //       website : website,
   //    },
   //  });
   //  e.target.reset();
   //  e.preventDefault();
   // }

  
   //  location value setter function - location setter function
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

 

//    filter Buttons functions - filter setter function
  const handleFilterButtons = (e)=>{
     console.log(e.target.id);
     setFilter(e.target.id);
     e.target.setAttribute("className","active");
  }

  const handleFilterOptions = (e) =>{
    setFilter(e.target.value);
  }

//   useEffect(()=>{
//      var filteredData = ;

//   },[filter])


  return (
   <>
      {/*  modals */}

      <div className="modal fade" id="createPost"  aria-labelledby="createPost" aria-hidden="true">
  <div className="modal-dialog  modal-md modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="container-fluid d-flex p-1 justify-content-end align-items-center">
            <FaTimesCircle color='white' />
          </div>
          <form method='post' action='http://localhost:7000/blog/create' className="bg-white container-fluid d-flex flex-column justify-content-center align-items-center p-2">
          
              <div className='container-fluid d-flex justify-content-start px-2 h5 align-items-center fw-bolder' >
                  Write a post!
              </div>
              
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name='title' placeholder='Enter post title' onChange={e=>handleTitle(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name='description' placeholder='Enter post description' onChange={e=>handleDesc(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Please Ensure File Type To Be: JPG ,PNG. 
             </div>
             <input type="file" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name='image' placeholder='Enter image' onChange={e=>handleImage(e)} required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Select post type :
             </div>
             <select className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name='postType' onChange={e=>handlePostType(e)} required>
                <option value="article" className='py-2' >article</option>
                <option value="education" className='py-2' >education</option>
                <option value="job" className='py-2' >job</option>
                <option value="event" className='py-2' >event</option>
             </select>
             </div>
             {postType==="event" &&
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Example: https://linkName.com
             </div>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name="eventAdditionalLink" placeholder='Enter Website Link' onChange={e=>handleWebsite(e)} required />
             </div>
             }
             {postType==="job" &&
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Example: https://linkName.com
             </div>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter Website Link to apply for jobs at' name='jobAdiitionalLink' onChange={e=>handleWebsite(e)} required />
             </div>
             }
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

      {/*  modal ends here */}
    <div className='container-fluid flex flex-col justify-content-center align-items-center bg-white py-5'>
      {/*  Post header */}
      <div className="container d-flex flex-row justify-content-between align-items-center border-bottom border-secondary border-opacity-50" >
          <div className="col-sm-6 d-md-block d-none d-flex flex-row justify-content-start align-items-end">
               <div className='d-flex flex-row justify-content-start align-items-end' >
               <li className='mx-2' >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className='border-end-0 border-top-0 border-start-0 bg-transparent p-2 fw-bold' id='all'>
                   AllPost({post.length})
                </button> 
               </li>
               <li className='mx-2' >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className=' border-0 bg-transparent p-2' id="article" >
                   Article
                </button> 
               </li>
               <li className='mx-2' >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className=' border-0 bg-transparent p-2' id="event" >
                   Event
                </button> 
               </li>
               <li className='mx-2'  >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className=' border-0 bg-transparent p-2' id="education" >
                  Education
                </button> 
               </li>
               <li className='mx-2' >
                <button type='button' onClick={(e)=>handleFilterButtons(e)}  className=' border-0 bg-transparent p-2' id="job" >
                   Job
                </button> 
               </li>
               </div>
             
          </div>
          <div className='col-sm-6 d-md-block d-none justify-content-center align-items-center'>
            <div className='container-fluid d-flex justify-content-end align-items-center' >
               <button type='button' data-bs-toggle="modal" data-bs-target="#createPost" className='p-2 btn-light border-0 me-1 fw-normal fs-6'>
                     Write a Post <FaCaretDown />
                </button>
                <button type='button'  className='p-2 bg-primary text-white border-0  ms-1 fw-normal fs-6'>
                     <FaUserPlus className="mx-1" />Join Group 
                </button>
            </div>
          </div>
      </div>
      {/*  Post header responsive  */}
      <div className="container d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-50 d-md-none d-block"  >
          <div className="col-md-6 d-flex flex-row justify-content-start align-items-center childPostHidden fs-5 fw-bolder">
             Posts : {filter} ({post.length})
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
                 {post.map((d)=>{
                     return <PostCard className="container-fluid d-flex flex-column justify-content-center align-items-center" key = {d.id} id = {d.id} title={d.title} desc = {d.desc} imageLink = {d.imageLink} postType={d.postType} publishDate = {d.currentDateTime} publisher = {d.userData} />
                 })}
           </div>
           <div className="col-sm-3 d-flex flex-column justify-content-start align-items-center py-4 d-md-block d-none"  >
                 <form className="container py-1 d-flex flex-row justify-content-between align-items-center border-bottom">
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
                         return <div key={d.id}
                         className='container-fluid d-flex justify-content-between align-items-center p-2 text-black'>
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