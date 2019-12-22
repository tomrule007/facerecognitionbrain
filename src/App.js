import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';
import './App.css';
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
function App() {
  const [input, setInput] = useState('');
  const [ImageUrl, setImageUrl] = useState('');
  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onButtonSubmit = () => {
    setImageUrl(input);
  };
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageUrl={ImageUrl} />
    </div>
  );
}

export default App;
