// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Login from './components/Login';
import Home from './components/Home';
// Import the Reservation component from the components folder
import Reservation from './components/Reservation';
import Room from './components/Room';
import Guest from './components/Guest';
import Real from './components/real';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Real/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/room" element={<Room />} />
        <Route path="/guest" element={<Guest />} />
      </Routes>
    </Router>
  );
}

export default App;
