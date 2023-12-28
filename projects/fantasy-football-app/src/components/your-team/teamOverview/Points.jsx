import React from "react";
import { useSelector } from "react-redux";

const Points = () => {
  const selectedTeam = useSelector(
    (football) => football.football.selectedTeam
  );
  const scoreDeduction = useSelector(
    (football) => football.football.scoreDeduction
  );
  const startingScoreArray = [];
  selectedTeam.map((player) => startingScoreArray.push(player.total_points));

  const grossPoints = startingScoreArray.reduce((a, b) => {
    return a + b;
  }, 0);



  return <h1>Points : {grossPoints - scoreDeduction}</h1>;
};

export default Points;
