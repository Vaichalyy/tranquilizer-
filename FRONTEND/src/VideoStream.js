import React, { useState, useEffect } from 'react';

function VideoStream() {
  const [streamUrl, setStreamUrl] = useState(null);

  useEffect(() => {
    fetch('/video')
      .then(response => {
        const reader = response.body.getReader();
        const stream = new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                push();
              });
            }
            push();
          }
        });
        const url = URL.createObjectURL(new Blob([stream], { type: 'video/mp4' }));
        setStreamUrl(url);
      });
  }, []);

  return (
    <div>
      {streamUrl && <video src={streamUrl} autoPlay />}
    </div>
  );
}

export default VideoStream;
