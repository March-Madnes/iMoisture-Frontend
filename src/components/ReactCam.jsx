import React from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "environment"
};

export const ReactCam = () => {
    return (
        <div className=''>
        <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}>

    {({ getScreenshot }) => (
        <div className="w-full absolute bottom-6 flex">
      <button className='border-8 border-green rounded-3xl mx-auto p-5'
        onClick={() => {
          const imageSrc = getScreenshot()
            console.log(imageSrc)
        }}
      >
        <svg class="w-10 h-10 text-grey-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
        </svg>
      </button>
      </div>
    )}
  </Webcam>
  </ div>
    )
}