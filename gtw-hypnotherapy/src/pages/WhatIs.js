import React from "react";
const WhatIs = () => {
  return (
    <>
      <article className="pageBody">
        <h2>What is Hypnotherapy?</h2>
        <div className="homeText">
          <h3>
            What is Solution Focused Hypnotherapy & what does a session consist
            of?
          </h3>

          <p>
            Solution Focused Hypnotherapy (SFHT) is a complimentary therapy
            consisting of a combination of psychotherapy (talk therapy) and
            hypnosis (trance). Through a series of carefully asked questions,
            you are able to pull your focus away from the problem and move it
            towards how you would like things to be. This technique of talk
            therapy is extremely beneficial and helps you to recognise your own
            strengths and resources that aid you to progress forward. Once you
            have reached a point in the session where you are feeling more
            positive and forward-thinking then you will experience hypnosis.{" "}
          </p>
          <img
            src={require("../assets/stairs3.jpg")}
            className="rAlign"
            alt="Georgina sat on the stairs"
          ></img>
          <p>
            {" "}
            Hypnosis or trance is a completely natural process that we go
            through several times a day without even noticing. Have you ever
            been so engrossed in a book or a tv programme that you have no idea
            what has been happening in the room around you? Or driven a journey
            in the car but have little or no recollection of how you got to your
            destination? Well, that is essentially trance. It is quite simply a
            deep state of relaxation, much like meditation. The conscious,
            active part of your brain has a break and quietens down, giving the
            subconscious mind an opportunity to fire up and get to work. The
            subconscious mind is responsible for 95% of your mind’s thoughts,
            actions, emotions and processes. During trance it is adaptable to
            change and is more readily open to suggestions. By tapping into your
            subconscious mind during trance I can feed it appropriate, positive
            language tailored to your specific symptoms and desired outcomes.
            When your subconscious mind is in a more positive frame this is when
            the changes in your day-to-day life really start taking hold.
          </p>
          <p className="lastParagraph">
            {" "}
            SFHT techniques are based on neuroscientific research and ongoing
            developments in brain science technology. It is proven that
            future-focused talk, visualisation, and hypnosis can have fantastic
            benefits on mental health and wellbeing.
          </p>
        </div>
      </article>
    </>
  );
};

export default WhatIs;
