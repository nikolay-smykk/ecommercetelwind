import React from 'react';
import '../sass/main.scss';
import { Route, Routes } from 'react-router-dom';
import { About } from './About';
import { Home } from './Home';

function RouteNav() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

const App = () => {
  return (
    <>
      <RouteNav />
    </>
  );
};

export default App;
