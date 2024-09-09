import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useLayoutEffect } from 'react'
import Home from './components/Home';
import Nav from './navbar/Nav';
import './App.css';
import Submission from './components/Submission';
import CardDetails from './components/CardDetails';


function App() {

  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exect path="/submission" element={<Submission />} />
        <Route exect path="/submission/:id" element={<Submission />} />
        <Route exect path="/card-details/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
