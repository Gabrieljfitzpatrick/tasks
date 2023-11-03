import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [requestedAttempts, setRequestedAttempts] = useState(0);

  const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input === "" || /^\d+$/.test(input)) {
      setRequestedAttempts(parseInt(input, 10) || 0);
    }
  };

  const handleUseAttempt = () => {
    if (attemptsLeft > 0) {
      setAttemptsLeft(attemptsLeft - 1);
    }
  };

  const handleGainAttempt = () => {
    setAttemptsLeft(attemptsLeft + requestedAttempts);
    setRequestedAttempts(0);
  };

  const isUseButtonDisabled = attemptsLeft === 0;

  return (
    <div>
      <h3>Give Attempts</h3>
      <p>Attempts Left: {attemptsLeft}</p>
      <input
        type="number"
        value={requestedAttempts}
        onChange={handleRequestChange}
      />
      <button onClick={handleUseAttempt} disabled={isUseButtonDisabled}>
        Use
      </button>
      <button onClick={handleGainAttempt}>Gain</button>
    </div>
  );
}
