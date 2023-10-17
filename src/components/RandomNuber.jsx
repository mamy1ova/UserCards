import React, { useState } from "react";

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

export const RandomNumber = () => {
  const [randomNum, setRandomNumber] = useState(generateRandomNumber());

  function changeRandomNumber() {
    setRandomNumber(generateRandomNumber());
  }
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNumber}>Generate</button>
    </div>
  );
};

export default RandomNumber;