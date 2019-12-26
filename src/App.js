import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn';
import Register from './components/Register';

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
  const [faceBoxLocations, setFaceBoxLocations] = useState([]);
  const [route, setRoute] = useState('signIn');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const app = new Clarifai.App({ apiKey: API_KEY });

  const calculateFaceBoxLocations = data => {
    const { regions } = data.outputs[0].data;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return regions.map(face => {
      const { bounding_box } = face.region_info;
      return {
        leftCol: bounding_box.left_col * width,
        topRow: bounding_box.top_row * height,
        rightCol: width - bounding_box.right_col * width,
        bottomRow: height - bounding_box.bottom_row * height
      };
    });
  };
  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onButtonSubmit = () => {
    setImageUrl(input);
    app.models
      .predict({ id: Clarifai.FACE_DETECT_MODEL }, input)
      .then(data => setFaceBoxLocations(calculateFaceBoxLocations(data)))
      .catch(console.log);
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation isSignedIn={isSignedIn} setRoute={setRoute} />
      <Logo />
      {route === 'home' ? (
        <>
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition
            faceBoxLocations={faceBoxLocations}
            imageUrl={ImageUrl}
          />
        </>
      ) : route === 'signIn' ? (
        <SignIn setRoute={setRoute} />
      ) : (
        <Register setRoute={setRoute} />
      )}
    </div>
  );
}

export default App;
