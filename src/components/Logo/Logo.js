import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

export default function Logo() {
  return (
    <div className="ma4 logo">
      <Tilt
        className="Tilt br2 shadow-2 background"
        options={{ max: 55 }}
        style={{
          height: 150,
          width: 150
        }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: '5px' }} alt="logo" src={logo} />
        </div>
      </Tilt>
    </div>
  );
}
