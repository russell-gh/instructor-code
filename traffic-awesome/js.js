import { turnAllOffExcept } from "./utils.js";
const lights = document.querySelectorAll(".light");
const stopButton = document.querySelector("button.stop");
const cautionButton = document.querySelector("button.caution");
const goButton = document.querySelector("button.go");
const stopLight = document.querySelector(".light.stop");
const cautionLight = document.querySelector(".light.caution");
const goLight = document.querySelector(".light.go");

stopButton.addEventListener("click", () => {
  turnAllOffExcept([stopLight], lights);
});

cautionButton.addEventListener("click", () => {
  turnAllOffExcept([cautionLight], lights);
});

goButton.addEventListener("click", () => {
  turnAllOffExcept([goLight], lights);
});

let timer; //global to the files so all event listeners can access it

document.getElementById("autoStop").addEventListener("click", () => {
  clearInterval(timer);
});

document.getElementById("autoGo").addEventListener("click", () => {
  const sequenceConfig = [
    { duration: 1000, sequence: [stopLight] },
    { duration: 300, sequence: [cautionLight] },
    { duration: 300, sequence: [] },
    { duration: 300, sequence: [cautionLight] },
    { duration: 300, sequence: [] },
    { duration: 300, sequence: [goLight] },
  ];

  let i = 0;

  //wrap in a function so I can re use
  const nextSequence = () => {
    timer = setTimeout(() => {
      turnAllOffExcept(sequenceConfig[i].sequence, lights);
      i++;

      if (i > sequenceConfig.length - 1) i = 0; //reset once you get to the end

      nextSequence();
    }, sequenceConfig[i].duration);
  };

  nextSequence(); //starts the whole thing
});
