export class LightsController {
  constructor() {
    //get refs to the dom
    this.go = document.getElementById("go");
    this.stop = document.getElementById("stop");

    //track the current state of the lights
    this.goState = false;
  }

  toggle() {
    //toggle between what colour is on/off
    this.goState = !this.goState;
    //update the interface
    this.updateInterface();
  }

  updateInterface() {
    if (this.goState) {
      this.go.classList.add("active");
      this.stop.classList.remove("active");
    } else {
      this.go.classList.remove("active");
      this.stop.classList.add("active");
    }
  }
}
