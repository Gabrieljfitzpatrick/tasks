import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
  const [value, setValue] = useState(1);
  const valueRef = useRef();

  const handleDouble = () => {
    setValue(2 * value);
  };

  const handleHalve = () => {
    setValue(0.5 * value);
  };

  return (
    <div>
      <h3>Double Half</h3>
      <div>
        The current value is: <span ref={valueRef}>{value}</span>
      </div>
      <Button onClick={handleDouble}>Double</Button>
      <Button onClick={handleHalve}>Halve</Button>
    </div>
  );
}