import React from 'react';
import img1 from '../assets/hotelier.png';
import Login from './Login';

export default function Real() {
  return (
    <div style={{ display: 'flex',position:'fixed', height: '100vh', backgroundColor:'#f1f0e7' }}>
      <div >
      <img id='hotelier' src={img1} style={{ width: '85%', height: 'auto',marginTop:'7rem'}} alt="Hotelier" />
      </div>
      <div style={{width: '50%' }}>
        <Login />
      </div>
    </div>
  );
}