import React from "react";
import './styles/App.css'
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


function App() {
  return <Router>
    <div>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>

  </Router>
}

export default App;