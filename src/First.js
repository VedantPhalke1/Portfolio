 import React, { useState } from 'react'
 import './first.css'
import person from './assets/user-solid.svg'
import email from './assets/envelope-solid.svg'
import password from './assets/lock-solid.svg'
import who from './assets/briefcase-solid.svg'



 const First = () => {

  const[action,setAction]=useState("Sign Up");



   return (
    <div className='main1'>
     <div className='container1'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className='input'>
          
       <div className="inputs">  
        <img src={person} alt="user"  />
        <input type='text' placeholder="Enter User Name" required/>
       </div>

       <div className="inputs">
        <img src={who} alt="" />
        <input type='text' placeholder="Enter User Occupation" required />
       </div>

       <div className="inputs">
        <img src={email} alt="email" />
        <input type='email' placeholder="Enter Email" required/>
       </div>

       <div className="inputs">
        <img src={password} alt="password" />
        <input type='password' placeholder="Enter Password" required/>
       </div>
       </div>
<div className='forgot'>Lost Password ?<span>Click Here !</span></div>
      <div className='submitcontainer'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

      </div>
  
     </div>

     </div>
   )
 }
 
 export default First

 










 





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './first.css';
// import axios from "axios"
// import person from './assets/user-solid.svg';
// import email1 from './assets/envelope-solid.svg';
// import who from './assets/briefcase-solid.svg';

// const First1 = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [role, setRole] = useState('');
//   const [email, setEmail] = useState('');


//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       const response = await axios.post('http://localhost:8000/', {
//         name,
//         role,
//         email,
//       });
  
//       if (response.data) {
//         navigate('/second');
//       }
//     } catch (error) {
//       alert('Error submitting form'); // This alert should be triggered if there's an error
//       console.error(error);
//     }
//   };
  
//   return (
//     <div className='main1'>
//       <div className='container1'>
//         <div className="header">
//           <div className="text">Information</div>
//           <div>Please enter your Information for visiting</div>
//           <div className="underline"></div>
//         </div>
//         <div className='input'>
//           <form onSubmit={handleSubmit}>
//             <div className="inputs">
//               <img src={person} alt="user" />
//               <input
//                 type='text'
//                 placeholder="Enter Your Name"
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//                 required
//               />
//             </div>

//             <div className="inputs">
//               <img src={who} alt="" />
//               <input
//                 type='text'
//                 placeholder="Enter Your Role"
//                 value={role}
//                 onChange={(event) => setRole(event.target.value)}
//                 required
//               />
//             </div>

//             <div className="inputs">
//               <img src={email1} alt="email" />
//               <input
//                 type='email'
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="bttn bttn2">Submit</button>
//           </form>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default First1;




  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {

  //     await axios.post("http://localhost:8000/",{
  //               name,role,email
        
  //     })

  //     .then(res=>{
  //       if(res.data=="exist"){
  //         navigate("/home",{state:{id:email}})
  //       }
  //       else if(res.data=="notexist"){
  //           alert("User have not sign up")
  //       }
  //   })
  //   .catch(e=>{
  //       alert("wrong details")
  //       console.log(e);
  //   })

  //     if (response.ok) {
  //       navigate('/second');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };













// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './first.css';

// import person from './assets/user-solid.svg';
// import email from './assets/envelope-solid.svg';
// import who from './assets/briefcase-solid.svg';

// const First1 = () => {
//   const navigate = useNavigate();
  
//   const handleSubmit = (event) => {
//     event.preventDefault(); 
//     navigate('/second');
//   };

//   return (
//     <div className='main1'>
//       <div className='container1'>
//         <div className="header">
//           <div className="text">Information</div>
//           <div>Please enter your Information for visiting</div>
//           <div className="underline"></div>
//         </div>
//         <div className='input'>
//           <form onSubmit={handleSubmit}>
//             <div className="inputs">
//               <img src={person} alt="user" />
//               <input type='text' placeholder="Enter Your Name" required />
//             </div>

//             <div className="inputs">
//               <img src={who} alt="" />
//               <input type='text' placeholder="Enter Your Role" required />
//             </div>

//             <div className="inputs">
//               <img src={email} alt="email" />
//               <input type='email' placeholder="Enter Email" required />
//             </div>
//             <button type="submit" className="bttn bttn2">Submit</button>
//           </form>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default First1;

