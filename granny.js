//right now!
var rightNow = new Date();

//create a date object containing the wake up time on the current day
let start = new Date();
start.setHours(12);
start.setMinutes(30);

//create a date object containing the bed time on the current day
let end = new Date();
end.setHours(9);
end.setMinutes(30);

//if the end is earlier than the start, the end must be the next day
end < start && end.setSeconds(end.getSeconds() + 86400);

if (
  start.getTime() < rightNow.getTime() &&
  rightNow.getTime() < end.getTime()
) {
  //now is between the start time and end time
  console.log("granny is awake");

  return {
    challenge: rightNow.getTime(),
  };
} else if (start.getTime() > rightNow.getTime()) {
  //start time is later than now
  console.log("granny is not yet awake");

  return {
    challenge: start.getTime(),
  };
} else {
  //must be passedend time must of passed
  console.log("granny has gone to bed for the night");

  //start is tomorrow so add one day to start
  let startPlusOneDay = new Date(start.setSeconds(start.getSeconds() + 86400));
  console.log(startPlusOneDay);
  return {
    challenge: startPlusOneDay.getTime(),
  };
}
