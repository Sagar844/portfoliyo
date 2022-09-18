import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { Routes, Route } from 'react-router-dom';
import Contact from "./Contact";
import Projects from "./Projects";


function App() {
  return (
    <div>

      <Home></Home>

      <Routes>

      <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Projects></Projects>

      <Footer></Footer>
    </div>
  );
}

export default App;
