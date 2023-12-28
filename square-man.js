const WALK_CONFIG = {
  increment: 1,
  totalSteps: 10,
  currentStep: 0,
  direction: "forwards",
};

const position = { lat: 0, lng: 0 };

// update the coordinates
intervalWalk = () => {
  // increment or decrement the longitide or lattitude based on the direction
  if (WALK_CONFIG.currentStep < WALK_CONFIG.totalSteps) {
    if (
      WALK_CONFIG.direction === "forwards" ||
      WALK_CONFIG.direction === "backwards"
    ) {
      position.lat =
        WALK_CONFIG.direction === "forwards"
          ? (position.lat += WALK_CONFIG.increment)
          : (position.lat -= WALK_CONFIG.increment);
    } else if (
      WALK_CONFIG.direction === "left" ||
      WALK_CONFIG.direction === "right"
    ) {
      position.lng =
        WALK_CONFIG.direction === "left"
          ? (position.lng += WALK_CONFIG.increment)
          : (position.lng -= WALK_CONFIG.increment);
    }
    WALK_CONFIG.currentStep += 1;
  } else {
    // reset the counter and change direction
    WALK_CONFIG.currentStep = 0;
    WALK_CONFIG.direction =
      WALK_CONFIG.direction === "forwards"
        ? "left"
        : WALK_CONFIG.direction === "left"
        ? "backwards"
        : WALK_CONFIG.direction === "backwards"
        ? "right"
        : "forwards";
  }
};

setInterval(() => {
  intervalWalk();
  console.log(position);
}, 500);
