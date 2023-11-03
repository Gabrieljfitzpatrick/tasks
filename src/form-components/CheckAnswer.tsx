import React, { useState } from "react";

export function CheckAnswer({
  expectedAnswer,
}: {
  expectedAnswer: string;
}): JSX.Element {
  const [userAnswer, setUserAnswer] = useState(""); // Initialize userAnswer as an empty string

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value); // Update userAnswer as the user types
  };

  return (
    <div>
      <h3>Check Answer</h3>
      <input
        type="text"
        value={userAnswer}
        onChange={handleAnswerChange}
        placeholder="Enter your answer"
      />
      {userAnswer === expectedAnswer ? (
        <span>✔️</span>
      ) : (
        <span>❌</span>
      )}
    </div>
  );
}
