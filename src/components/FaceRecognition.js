import React from 'react';
import './FaceRecognition.css';
export default function FaceRecognition({ imageUrl, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt="selected url"
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            left: box.leftCol,
            right: box.rightCol,
            top: box.topRow,
            bottom: box.bottomRow
          }}
        ></div>
      </div>
    </div>
  );
}
