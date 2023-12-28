import React from "react";
const Faq = () => {
  return (
    <>
      {" "}
      <article className="pageBody">
        <h2>FAQs</h2>
        <div className="homeTextFaq">
          <img
            src={require("../assets/desk.jpg")}
            className="rAlign"
            alt="Georgina working"
          ></img>
          <h3> Will I still have control when I’m in hypnosis/trance?</h3>
          <p>
            {" "}
            Yes. During trance you will be in a deep state of relaxation
            throughout which you will still have full control and can ‘wake up’
            at any point. All language I feed you is positive and if there is
            anything that you don’t resonate with then your brain will just
            simply reject it.
          </p>
          <h3>
            {" "}
            What is the difference between stage hypnotism and hypnotherapy?
          </h3>
          <p>
            {" "}
            Stage hypnotism is purely for entertainment value. Participants are
            carefully selected by the hypnotist as to who will be the most
            responsive to their demands. Hypnotherapy is a complimentary therapy
            where the full focus is on the client, their needs and helping them
            to progress forward. A hypnotic state is induced very differently in
            stage hypnotism. During our sessions you will reach this state by
            the use of relaxing music and guided visualisation language.
          </p>
          <h3> How long are the sessions and how many will I need? </h3>
          <p>
            Sessions are one hour long (smoking cessation sessions are two
            hours). The number of sessions you will need is completely dependant
            on your own symptoms and how committed you are to the treatment.
            Solution Focused Hypnotherapy is a ‘brief’ therapy, which means
            people start seeing results in a relatively short space of time
            compared to a lot of other therapies. Due to the nature of the way I
            work I normally see clients for between 6-12 sessions, some more,
            some less. I can normally treat specific phobias in 3 sessions. In
            the initial consultation I will give you a rough idea as to how many
            sessions I think you may need, this will always be an estimate and I
            make it clear no promises can be made. My aim is to help you make
            those changes rapidly and permanently so I can send you on your way
            to make the most of it!{" "}
          </p>
          <img
            src={require("../assets/notes.jpg")}
            className="lAlign"
            alt="Georgina working"
          ></img>
          <h3>How quickly will I see results? </h3>
          <p>
            Solution Focused hypnotherapy is a ‘brief’ therapy, meaning that
            results can be achieved a lot more quickly compared to a lot of
            other therapies. A lot of my clients express that just by learning
            how the mind works and the ‘brain science’ behind hypnotherapy in
            the initial consultation is enough for them to start feeling
            differently already. It is very much a collaborative therapy, and
            your commitment and dedication to your treatment is paramount if you
            want to make change. I like to think of it as gym membership. In
            order to change your physical health you pay for gym membership, you
            show up and do the exercise. The gym provides all the equipment and
            you use it in order to see change. The way I work is very similar. I
            have all the tools and techniques to make change to your mental
            well-being, all that is required is your dedication and desire.
          </p>
          <h3>Where do the sessions take place?</h3>
          <p className="lastParagraph">
            {" "}
            Sessions can take place at my therapy room in Three Bridges,
            Crawley, West Sussex, or via Zoom video call. Both options are
            equally effective. My therapy room is within easy reach of local bus
            and train services. There are also parking facilities if you wish to
            drive.
          </p>
        </div>
      </article>
    </>
  );
};

export default Faq;
