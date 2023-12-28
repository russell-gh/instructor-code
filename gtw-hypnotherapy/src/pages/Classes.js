import React from "react";
const Classes = () => {
  return (
    <>
      <article className="pageBody">
        <h2>Relaxation and Well - Being Class</h2>

        <div className="homeText">
          <img
            src={require("../assets/classflyer.png")}
            className="lAlign"
            alt="Class flyer"
          ></img>
          <p>
            {" "}
            Take some time for yourself to lie back, give the conscious, active
            part of your brain time to rest, and allow your powerful
            subconscious mind to fire up and absorb the incredible, uplifting
            and motivating language I will feed it.
          </p>
          <p>
            {" "}
            These classes are for anyone who needs some time out from their busy
            schedule, anyone who's interested in hypnotherapy, anyone who feel
            they need to gain back control of their life, or pretty much anyone
            who will enjoy closing their eyes for 45 minutes!
          </p>
          <address>
            {" "}
            St Barnabas Church Hall, Worth Road, Pound Hill, Crawley, West
            Sussex.
          </address>
          <div className="noJustify">
            <p>Every Wednesday at 7.15 - 8pm </p>
            <p> Bring a mat, a cushion, and a blanket for your comfort </p>
            <p className="lastParagraph">
              <a href="#">Click here</a> for more information and to book your
              space.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Classes;
