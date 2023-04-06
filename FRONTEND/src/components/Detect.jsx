import React, { useState } from "react";
import VideoStream from '../VideoStream';

const Detect = () => {
  const [showVideoStream, setShowVideoStream] = useState(false);

  const handleButtonClick = () => {
    setShowVideoStream(true);
  };

  return (
    <div>
      <section id="detect">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">
                Anxiety Detector
              </h1>
              <hr className="w-15 mx-auto" />
            </div>
          </div>
          <div>
            <button onClick={handleButtonClick} className="btn btn-dark me-4 rounded-pill px-4 py-2">Start Video Stream</button>
            {showVideoStream && <VideoStream />}
          </div> 
        </div>
      </section>
    </div>
  );
};

export default Detect;
