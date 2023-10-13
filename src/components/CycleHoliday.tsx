import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
  // Define an array of 5 holidays with corresponding emojis
  const holidays = [
    { name: "Christmas", emoji: "🎄" },
    { name: "Halloween", emoji: "🎃" },
    { name: "Easter", emoji: "🐰" },
    { name: "Thanksgiving", emoji: "🦃" },
    { name: "New Year", emoji: "🎉" },
  ];

  const [currentHoliday, setCurrentHoliday] = useState(0);

  // Function to advance to the next holiday alphabetically
  const advanceAlphabetically = () => {
    setCurrentHoliday((currentHoliday + 1) % holidays.length);
  };

  // Function to advance to the next holiday in the year
  const advanceByYear = () => {
    setCurrentHoliday((currentHoliday + 1) % holidays.length);
  };

  return (
    <div>
      <p>Holiday: {holidays[currentHoliday].emoji}</p>
      <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
      <Button onClick={advanceByYear}>Advance by Year</Button>
    </div>
  );
}

