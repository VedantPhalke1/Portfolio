import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './third.css'; 
import thankYouImage from './assets/thankyou.png';
import Count from './Count.js';

const YourReactComponent = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [password, setPassword] = useState(''); // Password for login
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [errorMessage, setErrorMessage] = useState(''); // Error message for wrong password

  // Hardcoded password for simplicity
  const correctPassword = "Vedant@321"; // Change this to whatever password you want

  useEffect(() => {
    const fetchTotalEntries = async () => {
      try {
        const response = await axios.get('http://localhost:8000/totalEntries');
        setTotalEntries(response.data.totalEntries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalEntries();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/search?query=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsLoggedIn(true); // Login successful
      setErrorMessage(''); // Clear any previous error messages
    } else {
      setErrorMessage('Incorrect password, please try again.');
    }
  };

  return (
    <>
      <div className="ThankYou">
        <Count /> {/* Displaying the login count */}
        <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />
        <h1>Thank You!</h1>
        <img src={thankYouImage} alt="Thank You" />
        <hr style={{ border: "1px solid  #75f0ee", margin: 10, marginTop: 40 }} />

        {!isLoggedIn ? (
          // Login form when the user is not logged in
          <div className="login-form">
            <h3>Please log in to access the search feature</h3>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bttn bttn2" type="submit">Login</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        ) : (
          // Search functionality when the user is logged in
          <>
            <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />
            <h3>Search people who visited the Portfolio....</h3>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)} />
            <button className='bttn bttn2' onClick={handleSearch}>Search</button>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {searchResults.map((user) => (
                <li key={user._id} style={{ display: 'inline-block', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                  <p>Name: {user.name}</p>
                  <p>Role: {user.role}</p>
                  <p>Email: {user.email}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        <hr style={{ border: "1px solid  #75f0ee", margin: 10 }} />
      </div>
    </>
  );
}

export default YourReactComponent;

















































































































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './third.css'; 
// import thankYouImage from './assets/thankyou.png';
// import Count from './Count.js';

// const YourReactComponent = () => {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [totalEntries, setTotalEntries] = useState(0);

//   useEffect(() => {
//     const fetchTotalEntries = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/totalEntries');
//         setTotalEntries(response.data.totalEntries);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchTotalEntries();
//   }, []);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/search?query=${query}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className="ThankYou">
//         <Count />
//         <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />
//         <h3>Search people who visited the Portfolio....</h3>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)} />
//         <button className='bttn bttn2' onClick={handleSearch}>Search</button>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           {searchResults.map((user) => (
//             <li key={user._id} style={{ display: 'inline-block', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
//               <p>Name: {user.name}</p>
//               <p>Role: {user.role}</p>
//               <p>Email: {user.email}</p>
//             </li>
//           ))}
//         </ul>
//         <hr style={{ border: "1px solid  #75f0ee", margin: 10, marginTop: 40 }} />
//         <hr style={{ border: "1px solid  #75f0ee", margin: 10 }} />
//         <h1>Thank You!</h1>
//         <img src={thankYouImage} alt="Thank You" />
//       </div>
//     </>
//   );
// }

// export default YourReactComponent;



























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './third.css'; 
// import thankYouImage from './assets/thankyou.png';
// import Count from './Count.js';
// const YourReactComponent = () => {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [totalEntries, setTotalEntries] = useState(0);

//   useEffect(() => {
//     const fetchTotalEntries = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/totalEntries');
//         setTotalEntries(response.data.totalEntries);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchTotalEntries();
//   }, []);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/search?query=${query}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
    
    
//     <div className="ThankYou"> {/* Use className to apply the styles */}
//     <Count />

//     <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />

//     <h3>Search people how wisited the Portfolio....</h3>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)} />
//       <button className='bttn bttn2' onClick={handleSearch}>Search</button>
//       <ul>
//         {searchResults.map((user) => (
//           <li key={user._id}>
//             <p>Name: {user.name}</p>
//             <p>Role: {user.role}</p>
//             <p>Email: {user.email}</p>
//           </li>
//         ))}
//       </ul>


//       <hr style={{ border: "1px solid  #75f0ee", margin: 10, marginTop: 40 }} />
//       <hr style={{ border: "1px solid  #75f0ee", margin: 10 }} />
//       <h1>Thank You!</h1>
//       <img src={thankYouImage} alt="Thank You" />

//     </div></>
    
//   );
// }

// export default YourReactComponent;



















// import React, { useState } from 'react';
// import axios from 'axios';
// import './third.css'; // Import the CSS file
// import thankYouImage from './assets/thankyou.png';

// const YourReactComponent = () => {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/search?query=${query}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="ThankYou"> {/* Use className to apply the styles */}
//       <p>Total Entries: {searchResults.length}</p>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <hr style={{ border: "1px solid  #75f0ee", margin: 10, marginTop: 40 }} />
//       <hr style={{ border: "1px solid  #75f0ee", margin: 10 }} />
//       <h1>Thank You!</h1>
//       <img src={thankYouImage} alt="Thank You" />
//       <ul>
//         {searchResults.map((user) => (
//           <li key={user._id}>
//             <p>Name: {user.name}</p>
//             <p>Role: {user.role}</p>
//             <p>Email: {user.email}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YourReactComponent;
































// import React from 'react';
// import './third.css'; // Import the CSS file
// import thankYouImage from './assets/thankyou.png'; 
// import React, {  useState } from 'react';
// import axios from "axios"
// // const ThankYou = ({ totalCount }) => {
// //   return (
// //     <div className="ThankYou"> {/* Use className to apply the styles */}
// //         <p>Total Entries: {totalCount}</p> 
// //       <input type="text" placeholder="Search..." /> 
// //       <hr style={{ border: "1px solid  #75f0ee", margin: 10,  marginTop:40}} />
// //       <hr style={{ border: "1px solid  #75f0ee", margin: 10 }} />
// //       <h1>Thank You!</h1>
// //       <img src={thankYouImage} alt="Thank You" /> 
// //     </div>
// //   );
// // }

// // export default ThankYou;

// const YourReactComponent = () => {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/search?query=${query}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {searchResults.map((user) => (
//           <li key={user._id}>
//             <p>Name: {user.name}</p>
//             <p>Role: {user.role}</p>
//             <p>Email: {user.email}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YourReactComponent;