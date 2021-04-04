import localforage from "localforage";
import {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Person } from "../types/person";
import { sleep } from "../utils";
import { FormState, personEditorReducer } from "./personEditorReducer";
import { useDebounce } from "./useDebounce";
import { useWillUnmount } from "./useWillUnmount";

function savePerson(person: Person | null): void {
  console.log("Saving", person);

  localforage.setItem("person", person);
}

type UsePersonReturnType = [
  Person | null,
  (name: keyof Person, value: unknown) => void,
  FormState
];

export function usePerson(initialPerson: Person): UsePersonReturnType {
  const [state, dispatch] = useReducer(personEditorReducer, {
    person: null,
    formState: { isDirty: false, isValid: true },
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
        dispatch({
          type: "set-initial-person",
          payload: person ?? initialPerson,
        });
      }
    };
    getPerson();
  }, [initialPerson]);

  useDebounce(() => {
    savePerson(state.person);
  }, 1000);

  useWillUnmount(() => {
    savePerson(state.person);
  });

  const setProperty = (name: keyof Person, value: unknown) => {
    dispatch({ type: "set-property", payload: { name, value } });
  };

  return [state.person, setProperty, state.formState];
}
