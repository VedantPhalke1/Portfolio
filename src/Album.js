import React from "react";
import imga2 from './assets/c3.jpg'
import imga3 from './assets/c4.jpg'
import imga4 from './assets/bench.jpg'

import './t.css';
const Album = () => {
  return (
    <div className="album">
      <h1 style={{ margin: 20 }}>Album </h1>
      <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />
      <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />

      <h3 style={{ margin: 20 }}>
        here are some memories of my life...
      </h3>
      <hr style={{ border: "1px solid  #75f0ee", margin: 30 }} />

      <h2 style={{ margin: 40 }}>
      
      </h2>
      <br />
     
      <div className="imagest">
        <img src={imga2} alt="c1" />
        <img src={imga3} alt="c2" />
        <img src={imga4} alt="c3" />
      
      </div>
    </div>
  );
};

export default Album;
