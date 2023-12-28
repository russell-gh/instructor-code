import React from "react";
import Result from "./Result";
const fakeData = require("../fakeData");

const Results = (props) => {
  //this looks for male and female if interested in both
  let filteredBySex = fakeData.userData.filter((item) => {
    if (Number(props.searchConfig.sex) === 2) {
      return true;
    }

    //looks for a specific sex
    return item.interestedInSex.includes(Number(props.searchConfig.sex));
  });

  //filters by location if one is set
  let filteredByLocation = filteredBySex.filter((item) => {
    if (
      !props.searchConfig.location ||
      item.location.includes(props.searchConfig.location)
    ) {
      return true; //keep entry
    }
    return false; //discard entry
  });

  return (
    <>
      <h1>Results</h1>
      {filteredByLocation.map((item) => {
        return (
          <Result
            setProfileUser={props.setProfileUser}
            id={item.id}
            name={item.name}
            age={item.age}
            location={item.location}
          />
        );
      })}
    </>
  );
};

export default Results;
