import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "../styles/testimonial.css";
const Testimonial = () => {
  return (
    <>
      <div className="testimonialBox">
        <h3> Testimonials</h3>
        <Carousel
          autoPlay={true}
          interval={15}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          swipeable={false}
        >
          <div>
            "I booked a course of therapy with Georgina to try & help with my
            low self-esteem & lack of motivation. I must admit I was a little
            sceptical at first. However, Georgina’s calm, relaxed manner put me
            at ease from the first session. By the third visit I really started
            to notice a positive difference in my attitude & way of thinking.
            It’s made such a big difference. The sessions were excellent & I
            would recommend GTW Hypnotherapy to everyone."
          </div>
          <div>
            "Georgina is such a warm & approachable person & great at listening.
            My mindset needed some guidance & I felt reassured to be able to
            talk openly & also relax in the environment. The transformation in
            my thought process has been staggering & I would highly recommend
            GTW to anyone going through challenges in life. Georgina is highly
            professional & passionate about helping others."
          </div>
          <div>
            "I went to see Georgina for support with my anxiety & confidence.
            They had both deteriorated due to not feeling like I was good
            enough…my looks, the way I dress & feeling like people were always
            judging me. I secluded myself away from going out & being sociable.
            Since having regular sessions with Georgina I owe her the biggest
            thank you! I had tried to battle my mental health for a couple of
            years & this weekend was the first time in those two years that I
            went away for the weekend! I’m so proud that I conquered my fears &
            I felt free for the first time in a long time. Georgina, thank you
            so much for supporting & helping me through a really tough time."
          </div>
          <div>
            "Georgina made me feel relaxed & comfortable from our first
            introductory meeting. Being new to any therapy, it was important for
            me to understand the process & feel confident in the person I was
            working with. Georgina was able to explain quite simply how
            hypnotherapy can work. She listened without judgement & has given me
            a toolkit that I can use with myself & those around me to ensure
            that I am feeling confident & positive in any situation. And I can
            now go to the shop by myself…hurrah!"
          </div>
          <div>
            "The hypnotherapy treatment I have had from Georgina has been life
            changing. The benefits have extended beyond helping me achieve some
            significant goals ina relatively short space of time. Overall my
            wellbeing & mental health has substantially improved. Georgina has
            been excellent & her calm, gentle, friendly & professional approach
            is very easy to work with. She was also able to accommodate my
            difficult schedule & be flexible about session times."
          </div>
          <div>
            "I got in contact with Georgina for some help with my anxiety &
            stress. I felt I needed some tools to help me cope when under
            pressure & feeling overwhelmed. Even from the first session I felt
            very at ease & Georgina explained what the sessions would entail &
            how many she thought I may need. I found this solution focused based
            therapy really positive & it really helped me to change my mindset &
            my perception of things. I always looked forward to my sessions &
            within 5-6 sessions I had already felt a dramatic difference in my
            behaviour & ability to cope when feeling overwhelmed. Thank you
            Georgina!"
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
