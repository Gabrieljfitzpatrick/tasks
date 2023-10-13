import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
  // Initialize a state variable to manage the visibility of the answer text.
  const [isAnswerVisible, setAnswerVisible] = useState(false);

  // Function to toggle the visibility of the answer text.
  const revealAnswer = () => {
    setAnswerVisible(!isAnswerVisible);
  };

  return (
    <div>
      <Button onClick={revealAnswer}>Reveal Answer</Button>
      {isAnswerVisible && <p>42</p>}
    </div>
  );
}

