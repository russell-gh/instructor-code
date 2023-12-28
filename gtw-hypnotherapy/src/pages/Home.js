import React from "react";
import Testimonial from "../components/Testimonial";
import ContactLink from "../components/ContactLink";
import heroPhoto from "../assets/stairs2crop.jpg";
import Youtube from "../components/Youtube";
const Home = () => {
  return (
    <>
      <article className="pageBodyHome">
        <img src={heroPhoto} alt="Georgina" className="italicPhoto"></img>
        <div className="italicWrapper">
          <p className="bigItalic">
            ‘Solution Focused Hypnotherapy to help you overcome challenges, get
            back control, & live the life you want to be living’
          </p>
        </div>
        <div className="homeText">
          <p>
            Is there something in your life that is holding you back? Making you
            feel stuck, and preventing you from doing things you want to do?
            Perhaps it’s anxiety, stress, lack of confidence, a fear or phobia,
            a bad habit, issues with your weight, or maybe you know you want
            change but just have no idea what this consists of? Maybe you just
            give so much to everyone else that now you’re feeling that you need
            to make time for yourself?
          </p>
          <p>
            If you find yourself answering “yes” to any of these questions, then
            welcome, you’ve come to the right place.{" "}
          </p>
          <p>
            My name is Georgina, the founder of GTW Hypnotherapy. I am a
            clinical Solution Focused Hypnotherapist and Psychotherapist, based
            in Crawley, West Sussex. I use a mixture of talk therapy and
            hypnosis to help you move away from problems of the past and get you
            focusing on a more positive future.
          </p>
          <p>
            {" "}
            We can all be guilty of holding onto the past and using it as an
            excuse for the way we live our lives today, but it doesn’t have to
            be that way. Solution Focused Hypnotherapy is exactly what it says
            on the tin. We don’t use the session time to talk about the problem,
            instead we spend it focusing on the solutions and how you would like
            things to be.
          </p>
          <p>
            {" "}
            My passion lies in helping my clients to get back control of their
            lives. Working with them to break those unwanted negative patterns
            of behaviour, discover a new sense of positivity and find happiness.
            In some cases they want to gain more confidence and achieve those
            goals they never thought possible.
          </p>
          <p>
            {" "}
            Sometimes the stresses and strains of daily life can make us lose
            who we are. When working together you have my full support,
            encouragement and determination to help you overcome obstacles and
            get the real YOU back.
          </p>
        </div>
        <Youtube />

        <p className="fullWidth"> “Nothing changes if nothing changes” </p>

        <div className="areas">
          <div className="areasPicture">
            <div className="areasPictureSubLayer">
              <h3>Areas of Support</h3>
            </div>
          </div>

          <ul className="flexSupport">
            {" "}
            <li>Anxiety </li>
            <li> Depression </li>
            <li> Stress </li>
            <li> Confidence, self-esteem & self-belief </li>
            <li> OCD </li>
            <li> Phobias and fears </li>
            <li> Weight management </li>
            <li>Insomnia and poor sleep </li>
            <li>Bad habits, such as nail biting </li>
            <li>
              Performance anxiety (e.g sports, public speaking, academic/exams){" "}
            </li>
            <li> Food anxiety </li>
            <li>Alcohol addiction </li>
            <li>Smoking/Vaping addiction </li>
            <li className="listEnd">
              {" "}
              Anxiety can display itself in a range of ways, so if you don’t
              spot your symptom(s) on this list then please don’t hesitate to
              get in touch as it is likely I may still be able to help.
            </li>
          </ul>
        </div>

        <div className="areas2">
          <div className="areasPicture2">
            <div className="areasPictureSubLayer">
              <h3 className="benefitsHeader">Benefits of Treatment</h3>
            </div>
          </div>
          <ul className="flexSupport">
            <li>Boosted confidence </li>
            <li> Feeling more in control of thoughts and emotions </li>
            <li>Feeling calmer </li>
            <li> Feeling happier and more positive </li>
            <li> Sleeping better </li>
            <li>Feeling more motivated </li>
            <li> Getting more done </li>
            <li> Achieving personal goals and aims </li>
            <li> Improved relationships </li>
            <li> More positive atmosphere at home </li>
            <li>Improved physical health including healthy weight loss </li>
            <li> Overcoming anxiety related health issues such as IBS </li>
            <li> Living life without their previous fear or phobia </li>
            <li> Quit smoking/vaping </li>
            <li> Reduce alcohol intake</li>
            <li className="listEnd">
              This list is not exhaustive, and I am amazed every day in my
              therapy room at the other incredible changes my clients make to
              their lives through the use of Solution Focused Hypnotherapy. If
              you would like to experience some of these outcomes for yourself
              then please don’t hesitate to contact me and get booked in for
              your free, initial consultation.
            </li>
          </ul>
        </div>
      </article>{" "}
      <ContactLink />
      <Testimonial />
    </>
  );
};

export default Home;
