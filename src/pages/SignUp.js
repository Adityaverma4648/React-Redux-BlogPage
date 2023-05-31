import React,{useState} from 'react';

const SignUp = () => {

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
     
      if(e.target.checked){
        password.setAttribute("type" , "text");
      }else{
        password.setAttribute("type" , "password");
      }
    }


  return (
     <div className='w-100 d-flex justify-content-center align-items-center' style={{height:"100vh"}} >
          <div className='w-sm-50 h-50 p-2' id="signUp" aria-labelledby="signUp" aria-hidden="true">
    <div className="">
      <div className="content">
        <div className="header text-center">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
      <div className="modal-body">
         <form method="post" action="http://localhost:7000/auth/signUp" className="bg-white container-fluid d-flex flex-column justify-content-center align-items-center p-2">
      
          <div className='container-fluid d-flex justify-content-start px-2 h5 align-items-center fw-bolder' >
              SignUp
          </div>
          
         <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
         <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter User Name' name="userName" onChange={e=>handleUserName(e)} required />
         </div>
         <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
         <input type="email" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter email' name="userEmail" onChange={e=>handleEmail(e)} required />
         </div>
         <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>

         <input type="password" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter password' id="password" name="password" onChange={e=>handlePassword(e)}  autoComplete="on" required />
         </div>
         <div className='container-fluid d-flex flex-row justify-content-end align-items-center mb-1 py-1'>
            <label htmlFor="visibility" className="fw-bolder fs-6">
               Show Password
            </label>
            <input type="checkbox" className='border border-secondary border-opacity-50 bg-transparent p-2 ms-2' placeholder='Enter password' name="visibility" onChange={(e)=>handlePasswordVisibility(e)}  />
         </div>
         <div className="container-fluid">
           <input type="submit" className='btn btn-primary' />
         </div>
      </form>
  </div>
</div>
</div>
    </div>
     </div>
  )
}

export default SignUp