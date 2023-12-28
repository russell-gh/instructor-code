// create a new date object and set the hours and minutes equal to the
  // nice JSON parsed challenge window from above
  let start = new Date();
  start.setHours(parseInt(parsedCW.start_hour));
  start.setMinutes(parseInt(parsedCW.start_minute));

  // 86400 is the number of seconds in one day,
  // Here if the end time is less than the start time in
  // 24 hour timekeeping we assume it is the next day.
  let end = new Date();
  end.setHours(parseInt(parsedCW.end_hour));
  end.setMinutes(parseInt(parsedCW.end_minute));
  end <= start && end.setSeconds(end.getSeconds() + 86400);

  // WHEN IS PUZZLE TIME???

  // These are the two things that we always return, they are needed for later recycling.
  let returnObj = {
    challengeTypes: results[0].challenge_types,
    challengeAttemptThreshold: results[0].challenge_attempt_threshold,
  };

  // if the user doesn't have any activity...
  if (results.length > 0 && results[0].challenge_notify_time === null) {
    console.log("This user doesn't have any activity", results[0]);
    //...and we are inside the challenge window right now
    if (
      start.getTime() < rightNow.getTime() &&
      rightNow.getTime() < end.getTime()
    ) {
      // it is puzzle time right now
      console.log(
        "send the puzzle now for granny, she is awake",
        rightNow.toString()
      );
      let inactiveInt = parseInt(results[0].inactive_threshold) * 60 * 1000;
      return {
        ...returnObj,
        challenge: rightNow.getTime(),
        challengeOverdue: rightNow.getTime() + inactiveInt,
      };
    } else if (start.getTime() > rightNow.getTime()) { //start time is later than now
      console.log('granny is not yet awake');

      //next puzzle is due when granny wakes up

      let inactiveInt = parseInt(results[0].inactive_threshold) * 60 * 1000;
      return {
        ...returnObj,
        challenge: start.getTime(),
        challengeOverdue: start.getTime() + inactiveInt,
      };
    } else {
      // granny already went to bed
      console.log("granny has gone to be for the night");
      let startPlusOneDay = new Date(
        start.setSeconds(start.getSeconds() + 86400)
      );
      let inactiveInt = parseInt(results[0].inactive_threshold) * 60 * 1000;
      return {
        ...returnObj,
        challenge: startPlusOneDay.getTime(),
        challengeOverdue: startPlusOneDay.getTime() + inactiveInt,
      };
    }
  } else {
    console.log("this user does have activity", results[0]);
    ////////////////////
    let interval = parseInt(results[0].challenge_interval) * 60 * 1000;
    let puzzleDue = parseInt(results[0].challenge_success_time) + interval;
    let puzzleDueObj = new Date(puzzleDue);
    console.log("THIS IS PUZZLE TIME", interval, puzzleDue, puzzleDueObj);
    // are we inside the challenge window?
    // puzzle time is now + interval
    console.log(start.getTime(), puzzleDueObj.getTime())
    if (
      start.getTime() < puzzleDueObj.getTime() &&
      puzzleDueObj.getTime() < end.getTime()
    ) {
      console.log("granny is awake do a puzzle now");
      let inactiveInt = parseInt(results[0].inactive_threshold) * 60 * 1000;
      return {
        ...returnObj,
        challenge: puzzleDueObj.getTime(),
        challengeOverdue: puzzleDueObj.getTime() + inactiveInt,
      };
    }
    // if we are not inside the challenge window
    // puzzle time is start

      else if (start.getTime() > puzzleDueObj.getTime()) { //start time is later than now
        console.log('granny is not yet awake');
  
        //next puzzle is due when granny wakes up
  
        let inactiveInt = parseInt(results[0].inactive_threshold) * 60 * 1000;
        return {
          ...returnObj,
          challenge: start.getTime(),
          challengeOverdue: start.getTime() + inactiveInt,
        };

    } else {
      console.log("granny is sleeping, send a puzzle 'tomorrow'", start, rightNow, puzzleDueObj);
      let startPlusOneDay = new Date(
        start.setSeconds(start.getSeconds() + 86400)
      );
      let inactiveInt = parseInt(results[0].inactive_threshold) * 60 * 1000;
      return {
        ...returnObj,
        challenge: startPlusOneDay.getTime(),
        challengeOverdue: startPlusOneDay.getTime() + inactiveInt,
      };
    }
  }
};