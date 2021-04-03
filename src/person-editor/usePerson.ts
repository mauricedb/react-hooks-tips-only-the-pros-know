import localforage from "localforage";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Person } from "../types/person";
import { sleep } from "../utils";
import { useDebounce } from "./useDebounce";
import { useWillUnmount } from "./useWillUnmount";

function savePerson(person: Person | null): void {
  console.log("Saving", person);

  localforage.setItem("person", person);
}

export function usePerson(
  initialPerson: Person
): [Person | null, (person: Person | null) => void] {
  const [person, setPerson] = useState<Person | null>(null);
  const loaded = useRef(false);

  useLayoutEffect(() => {
    loaded.current = true;

    return () => {
      loaded.current = false;
    };
  });

  useEffect(() => {
    const getPerson = async () => {
      // await sleep(2500);
      const person = await localforage.getItem<Person>("person");
      if (loaded.current) {
        setPerson(person ?? initialPerson);
      }
    };
    getPerson();
  }, [initialPerson]);

  useDebounce(() => {
    savePerson(person);
  }, 1000);

  useWillUnmount(() => {
    savePerson(person);
  });

  return [person, setPerson];
}
