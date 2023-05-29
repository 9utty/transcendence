import React from "react";
import { Counter } from "react95";

interface Score {
  player1: number;
  player2: number;
}

const GameScore = ({ player1, player2 }: Score) => {
  return (
    <div>
      <Counter size={"md"} value={player1} />
      <Counter size={"md"} value={player2} />
    </div>
  );
};

export default GameScore;
