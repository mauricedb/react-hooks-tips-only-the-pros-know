import { useState } from "./fakeReact.mjs";

export function Counter() {
  const [simpleCounter, setSimpleCounter] = useState(10);
  const [squareCounter, setSquareCounter] = useState(10);

  if (simpleCounter < 16) {
    setSimpleCounter(simpleCounter + 1);
  }

  if (simpleCounter === 12) {
    setSquareCounter(Math.pow(squareCounter, 2));
  } else if (simpleCounter === 14) {
    setSquareCounter(Math.pow(squareCounter, 2));
  }

  console.log("The Counter component state:", {
    simpleCounter,
    squareCounter,
  });

  return [];
}
