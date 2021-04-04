/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactElement, useRef, useState } from "react";

export function Counter(): ReactElement {
  const [counter, setCounter] = useState(0);

  //   for (let index = 0; index < counter; index++) {
  //     useState(true);
  //   }

  //   if (counter % 2 === 0) {
  //     useRef(true);
  //   } else {
  //     useState(true);
  //   }

  return (
    <div>
      <div>Count: {counter}</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
}
