import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import First1 from './First1.js';
import Second from './Second.js';
import Third from './Third.js';
import Album from './Album.js';
import T from './T.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<First1 />} />
        <Route path="/Second" element={<Second />} />
        <Route path="/Third" element={<Third/>} />
        <Route path="/album" element={<Album />} />
        <Route path="/T" element={<T/>} />
      </Routes>
    </Router>
  );
}
export default App;
