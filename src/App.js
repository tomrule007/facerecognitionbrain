import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';
import './App.css';
import { API_KEY } from './api-keys.js';

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
  const [box, setBox] = useState({});

  const app = new Clarifai.App({ apiKey: API_KEY });

  const calculateFaceLocation = data => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const faceBox = {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height
    };
    console.log(faceBox);
    return faceBox;
  };
  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onButtonSubmit = () => {
    setImageUrl(input);
    app.models
      .predict({ id: Clarifai.FACE_DETECT_MODEL }, input)
      .then(calculateFaceLocation)
      .catch(console.log);
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
