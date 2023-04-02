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
              <h3 className="fs-5 text-center mb-0">Classify</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b>Classiy
              </h1>
              <hr className="w-15 mx-auto" />
            </div>
          </div>
          <div>
            <h1>My App</h1>
            <button onClick={handleButtonClick}>Start Video Stream</button>
            {showVideoStream && <VideoStream />}
          </div> 
        </div>
      </section>
    </div>
  );
};

export default Detect;
