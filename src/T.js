import React from 'react';
import img1 from './assets/img1.png'
import img2 from './assets/c1.png'
import img3 from './assets/c2.png'
import './t.css';
const  T= () => {
  // Sample image URLs
  
  return (
    <div className="T">
      <h1 style={{ margin:20 }}>Achivements </h1>
      <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />
      <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />

      <h3 style={{ margin:20 }}>here are some Certifications and Achivements</h3>
      <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />

      <h2 style={{ margin:40 }}> CGPA = <span style={{ color:"red", }}>9.33</span></h2>
<br/>
{/*   <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} /> */}
<div className='imagest'>

      <img src={img2} alt="c1" />
      <img src={img3} alt="c2" />


</div>
    </div>
  );
};

export default T;
