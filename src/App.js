import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import "./Styles/App.scss";
import Footer from "./Components/Footer"
import Contact from './Components/Contact';

function App() {
  const [tab, setTab] = useState(window.location.pathname)

  useEffect(() => {
    if (tab === "/") {
      document.title = "MYTEAM - HOME"
    }
    if (tab === "/about") {
      document.title = "MYTEAM - ABOUT"
    }
    if (tab === "/contact") {
      document.title = "MYTEAM - CONTACT"
    }
  }, [tab]);
  return (
    <Router>
      <Header tab={tab} setTab={setTab} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer tab={tab} setTab={setTab} />
    </Router>
  );
}

export default App;
