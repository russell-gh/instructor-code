import React from "react";
const About = () => {
  return (
    <>
      <article className="pageBody">
        <h2>About Me</h2>
        <div className="homeText">
          <img
            className="lAlign"
            src={require("../assets/stairs.jpg")}
            alt="Georgina with a cup of tea"
          ></img>
          <p>
            I trained at the Clifton Practice for Hypnotherapy Training and
            qualified with both a Diploma in Solution Focused Hypnotherapy
            (DSFH) and the prestigious Hypnotherapy Practitioner Diploma (HPD).
          </p>

          <p>
            My work in this field of therapy comes after, and also alongside, a
            career as a professional singer and actress (bit of a change eh?!).
            Throughout the years of ‘treading the boards’ I have always had an
            interest in therapy and how people are able to transform their lives
            through talking and various other therapeutic techniques.
          </p>
          <p>
            {" "}
            My decision to be a hypnotherapist happened one evening when
            scrolling through social media and an advert popped up. After
            researching the various courses available to me I was in no doubt
            that solution focused hypnotherapy was the way for me to go. And I
            couldn’t have been more right! In my own life I have always been a
            forward-thinker, trying not to worry about things that may never
            happen, and being conscious of putting a positive spin on things
            that might at first seem troublesome.
          </p>
          <p>
            {" "}
            As well as my work, I am also a wife, and Mum to two little people
            and a shih tzu called Lola.{" "}
          </p>
          <p>
            I truly believe that my discovery of hypnotherapy has changed my
            life for the better in many ways, not only from a career point of
            view but also in my overall mental wellbeing, approach to life,
            motivation and happiness. My aim is to share this process with as
            many people as possible and let them experience for themselves the
            significant changes that can be made, no matter how impossible they
            may seem.{" "}
          </p>
          <p>
            I would love for the opportunity to make hypnotherapy accessible for
            you, so please don’t hesitate to contact me if you would like to
            book in for your free, initial consultation.
          </p>
          <p className="fullWidthQuote">
            {" "}
            “If you always do what you’ve always done, you’ll always get what
            you always got”
          </p>
          <p className="henryFord"> - Henry Ford</p>
        </div>
      </article>
    </>
  );
};

export default About;
