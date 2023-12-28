import React from "react";
const Sessions = () => {
  return (
    <>
      <article className="pageBody">
        <h2>Sessions & Prices </h2>
        <div className="homeText">
          <h3>Free, Initial Consultation</h3>
          <img
            src={require("../assets/tea2.jpg")}
            className="rAlign"
            alt="Georgina"
          ></img>
          <p>
            Before we begin any treatment, I offer a free, initial consultation
            to all prospective clients. This consultation is an opportunity for
            us to meet and for you to tell me what you would like help with. It
            is also a chance for me to give you a short explanation about how
            the mind works, why you are suffering the way you are and how
            Solution Focused Hypnotherapy can help. A lot of clients find that
            they already start to feel more positive after this consultation as
            they begin to understand the ‘brain science’ and learn that their
            symptoms are not their fault or a trait in their personality.
          </p>
          <p>
            {" "}
            When seeking therapy it is so important that you choose a therapist
            that you feel comfortable with. This first meeting allows you the
            chance to make the choice as to whether I am the right therapist for
            you. There is no obligation to go ahead with treatment and there
            will be no pushy sales from my end. My aim is to ease your anxiety,
            not heighten it. Whatever your decision you will walk away from this
            consultation with a copy of my relaxation audio to start you on your
            road to change.{" "}
          </p>
          <h3>Sessions </h3>
          <p>
            Individual sessions are one hour long and are best conducted on a
            weekly basis to maintain momentum in your treatment.{" "}
          </p>
          <h3>Packages</h3>
          <p>
            {" "}
            I offer a discounted rate when you prebook 6 sessions. The reason
            being is that it is very likely you will need at least 6 sessions in
            order to begin making significant changes to your mental wellbeing
            and your life. By booking a package you have made that commitment to
            yourself to make those changes, and this in itself can be very
            motivating. (However, please note that the number of sessions
            required is completely dependant on the client.){" "}
          </p>
          <p>
            {" "}
            I can treat specific phobias in 3 sessions and there is a discounted
            rate for this package. (Please note some phobias require more
            sessions, this will be discussed fully in the initial consultation.)
          </p>{" "}
          <img
            src={require("../assets/laptop.jpg")}
            className="lAlign"
            alt="Georgina doing a Zoom consultation"
          ></img>
          <h3>Smoking/Vaping Cessation</h3>
          <p>
            {" "}
            One, two-hour long session is normally all that is required to get
            you to ditch the cigarettes and/or vape for good. Solution Focused
            Hypnotherapy has an 80% success rate in getting you to quit…for
            life! All that is required of you is a strong desire and the
            determination to stop. The techniques I use do work but only if you
            play your part too. (An initial consultation is not required for a
            smoking/vape cessation, just a few prior questions.)
          </p>
          <p>
            {" "}
            All sessions, including the initial consultation can be carried out
            in person at my therapy room in Crawley, West Sussex or via Zoom
            video call.
          </p>
          <p>
            {" "}
            Online sessions work just as effectively as face-to-face, and I have
            worked successfully with clients from all around the globe. All that
            I ask is that you have a good internet connection and can be in a
            quiet, comfortable room where you won’t be disturbed
          </p>{" "}
          <h3>Prices</h3>
        </div>

        <ul className="priceList">
          <li className="wide1">Initial Consultation (45 mins) </li>
          <li className="wide1">
            {" "}
            FREE plus a free copy of my relaxation audio
          </li>
          <li className="wide2"> Individual session (1 hr) </li>
          <li className="wide2"> £60 </li>
          <li className="wide1"> Package of 6 sessions </li>
          <li className="wide1"> £300</li>

          <li className="wide2"> Smoking/Vaping cessation session (2 hrs) </li>
          <li className="wide2"> £150</li>
        </ul>
      </article>
    </>
  );
};

export default Sessions;
