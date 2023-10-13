import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
  return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
  // Initialize the state for the two dice with different initial values
  const [leftDie, setLeftDie] = useState(d6());
  const [rightDie, setRightDie] = useState(d6());

  // Function to handle rolling the left die
  const rollLeftDie = () => {
    const newValue = d6();
    setLeftDie(newValue);

    // Check if the left and right dice values are the same
    if (newValue === rightDie) {
      // Render a message with the word "Lose"
      console.log("Lose");
    }
  };

  // Function to handle rolling the right die
  const rollRightDie = () => {
    const newValue = d6();
    setRightDie(newValue);

    // Check if the left and right dice values are the same
    if (newValue === leftDie) {
      // Render a message with the word "Lose"
      console.log("Lose");
    }
  };

  return (
    <div>
      <div>
        <span data-testid="left-die">{leftDie}</span>
        <Button onClick={rollLeftDie}>Roll Left</Button>
      </div>
      <div>
        <span data-testid="right-die">{rightDie}</span>
        <Button onClick={rollRightDie}>Roll Right</Button>
      </div>
      {leftDie === rightDie && <div>You Win</div>}
    </div>
  );
}
