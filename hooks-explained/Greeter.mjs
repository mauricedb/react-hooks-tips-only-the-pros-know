import { useState } from "./fakeReact.mjs";

function Greeter(initialName) {
  const [name, setName] = useState(initialName);

  if (name === "Zaphod Beeblebrox") {
    setName("Ford Prefect");
  }

  console.log(`The Greeter component (${initialName}) state:`, { name });

  return [];
}

export const ArthurDent = Greeter.bind(null, "Arthur Dent");
export const ZaphodBeeblebrox = Greeter.bind(null, "Zaphod Beeblebrox");
