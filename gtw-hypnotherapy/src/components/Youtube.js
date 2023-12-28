import React from "react";
const Youtube = () => {
  return (
    <>
      {/* <iframe
        width="60%"
        height="315"
        src="https://www.youtube.com/embed/enDfoGKRTSo"
        title="GTW Hypnotherapy Intro"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="false"
      ></iframe> */}
      <div className="iframeWrapper">
        <iframe
          src="https://www.youtube.com/embed/enDfoGKRTSo"
          title="GTW Hypnotherapy Intro"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Youtube;
