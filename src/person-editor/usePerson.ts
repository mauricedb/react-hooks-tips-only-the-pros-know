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

interface FormState {
  isDirty: boolean;
  isValid: boolean;
}

type UsePersonReturnType = [
  Person | null,
  (person: Person | null) => void,
  FormState
];

export function usePerson(initialPerson: Person): UsePersonReturnType {
  const [person, setPersonState] = useState<Person | null>(null);
  const [formState, setFormState] = useState({
    isDirty: false,
    isValid: true,
  });

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
        setPersonState(person ?? initialPerson);
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

  const setPerson = (person: React.SetStateAction<Person | null>) => {
    setPersonState(person);
    setFormState((s) => ({ ...s, isDirty: true }));
  };

  return [person, setPerson, formState];
}
