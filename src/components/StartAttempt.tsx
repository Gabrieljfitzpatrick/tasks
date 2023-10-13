import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
  // Define the initial state for the number of attempts and whether the quiz is in progress.
  const [attempts, setAttempts] = useState(4);
  const [isQuizInProgress, setIsQuizInProgress] = useState(false);

  // Function to start the quiz
  const startQuiz = () => {
    if (attempts > 0) {
      setIsQuizInProgress(true);
      setAttempts(attempts - 1);
    }
  };

  // Function to stop the quiz
  const stopQuiz = () => {
    setIsQuizInProgress(false);
  };

  // Function to use a Mulligan (increase attempts)
  const useMulligan = () => {
    setAttempts(attempts + 1);
  };

  return (
    <div>
      <div>
        <p>Attempts: {attempts}</p>
        {isQuizInProgress ? (
          <Button variant="danger" onClick={stopQuiz}>
            Stop Quiz
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={startQuiz}
            disabled={attempts === 0}
          >
            Start Quiz
          </Button>
        )}
        <Button
          variant="info"
          onClick={useMulligan}
          disabled={isQuizInProgress}
        >
          Mulligan
        </Button>
      </div>
    </div>
  );
}
