import React, { useState, useEffect } from 'react';
import axios from 'axios'
 import './count.css';

const YourReactComponent = () => {
    const [totalCount, setTotalCount] = useState(null);
  
    useEffect(() => {
      const fetchTotalCount = async () => {
        try {
          const response = await axios.get('http://localhost:8000/count');
          setTotalCount(response.data.count);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchTotalCount();
    }, []);
  
    return (
      <div id='countdiv'>
        {totalCount !== null ? (
          <p id='counttext'>Number of people visited:<span> {totalCount}</span></p>
        ) : (
          <p>Loading...</p>
        )}
        {/* Add your other components here */}
      </div>
    );
  };
  
  export default YourReactComponent;
  