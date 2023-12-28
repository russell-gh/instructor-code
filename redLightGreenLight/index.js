import { LightsController } from "./lightsController.js";

const _lightsController = new LightsController();

//setInterval random number
// const setIntervalRandomNumber = Math.floor(Math.random() * 10) * 1000;
// setInterval(setIntervalCallBack, setIntervalRandomNumber);

// function setIntervalCallBack() {
//   //happens random n seconds
//   const setIntervalRandomNumber = Math.floor(Math.random() * 10) * 1000;

//   function setTimeoutCallBack() {
//     _lightsController.toggle();
//   }

//   setTimeout(setTimeoutCallBack, setIntervalRandomNumber);
// }

//create one time random number
// const setIntervalRandomNumber = Math.floor(Math.random() * 10) * 1000;

//start an inifinite loop
setInterval(function () {
  //happens random n seconds
  const setIntervalRandomNumber = Math.floor(Math.random() * 10) * 1000;

  //for each loop, start a one time timer with a random length
  setTimeout(function () {
    _lightsController.toggle();
    console.log(new Date());
  }, setIntervalRandomNumber);
}, 1000);
