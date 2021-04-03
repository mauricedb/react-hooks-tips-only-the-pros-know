import localforage from "localforage";
import { useEffect, useLayoutEffect, useState } from "react";
import { Person } from "../types/person";
import { sleep } from "../utils";

function savePerson(person: Person | null): void {
  console.log("Saving", person);

  localforage.setItem("person", person);
}

// Note: This is wrong as this value is shared between all instances
let loaded = false;

export function usePerson(
  initialPerson: Person
): [Person | null, (person: Person | null) => void] {
  const [person, setPerson] = useState<Person | null>(null);

  useLayoutEffect(() => {
    loaded = true;

    return () => {
      loaded = false;
    };
  });

  useEffect(() => {
    const getPerson = async () => {
      await sleep(2500);
      const person = await localforage.getItem<Person>("person");
      if (loaded) {
        setPerson(person ?? initialPerson);
      }
    };
    getPerson();
  }, [initialPerson]);

  useEffect(() => {
    savePerson(person);
  }, [person]);

  return [person, setPerson];
}
