function isAwake(startHour, endHour, testTime) {
  //right now!
  var rightNow = new Date(testTime * 1000);

  //create a date object containing the wake up time on the current day
  let start = new Date(rightNow.getTime());
  start.setHours(startHour);
  //start.setMinutes(30);

  //create a date object containing the bed time on the current day
  let end = new Date(rightNow.getTime());
  end.setHours(endHour);
  //end.setMinutes(30);

  //if the end is earlier than the start, the end must be the next day
  end < start && end.setSeconds(end.getSeconds() + 86400);

  if (
    start.getTime() < rightNow.getTime() &&
    rightNow.getTime() < end.getTime()
  ) {
    //now is between the start time and end time
    console.log("granny is awake");
  } else if (start.getTime() > rightNow.getTime()) {
    //start time is later than now
    console.log("granny is not yet awake");
  } else {
    //must be passedend time must of passed
    console.log("granny has gone to bed for the night");

    //start is tomorrow so add one day to start
    let startPlusOneDay = new Date(
      start.setSeconds(start.getSeconds() + 86400)
    );
    console.log("Granny is next awake", startPlusOneDay);
  }
}

//test all three scenarios
isAwake(10, 18, 1658802296);
isAwake(10, 18, 1658838296);
isAwake(10, 18, 1658867097);
isAwake(22, 1, 1658960447); //11pm
