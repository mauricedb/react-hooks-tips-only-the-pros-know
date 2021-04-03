import localforage from "localforage";
import { useEffect, useState } from "react";
import { Person } from "../types/person";

function savePerson(person: Person | null): void {
  console.log("Saving", person);

  localforage.setItem("person", person);
}

export function usePerson(
  initialPerson: Person
): [Person | null, (person: Person | null) => void] {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    const getPerson = async () => {
      const person = await localforage.getItem<Person>("person");
      setPerson(person ?? initialPerson);
    };
    getPerson();
  }, [initialPerson]);

  useEffect(() => {
    savePerson(person);
  }, [person]);

  return [person, setPerson];
}
