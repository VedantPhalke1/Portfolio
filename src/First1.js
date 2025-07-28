
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './first1.css';
import axios from "axios"
import person from './assets/user-solid.svg';
import email1 from './assets/envelope-solid.svg';
import who from './assets/briefcase-solid.svg';


const First1 = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/', {
        name,
        role,
        email,
      });

      if (response.data === 'saved') {
        navigate('/second');
      }
    } catch (error) {
      alert('Error submitting form'); // This alert should be triggered if there's an error
      console.error(error);
    }
  };

  return (
    <div className='main1'>
      <div id='left1'>
        <h1 id="welcome">Welcome to <span>Vedant's  </span>Portfolio !!!</h1>   
      </div>
      <div className='container1'>
        <div className="header">
          <div className="text">Information</div>
          <div>Please enter your Information for visiting</div>
          <div className="underline"></div>
        </div>
        <div className='input'>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <img src={person} alt="user" />
              <input
                type='text'
                placeholder="Enter Your Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="inputs">
              <img src={who} alt="" />
              <input
                type='text'
                placeholder="Enter Your Role"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                required
              />
            </div>

            <div className="inputs">
              <img src={email1} alt="email" />
              <input
                type='email'
                placeholder="Enter Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="bttn bttn2">Submit</button>
          </form>
        </div>
        
      </div>
      
    </div>       
  );
}

export default First1;







