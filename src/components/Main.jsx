import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from '../pages/WeatherApp';
import Page2 from '../pages/News';
import Home from '../pages/Home';


function Main() {
  return (
    <main>
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />

      </Routes>
    </main>
  );
}

export default Main;