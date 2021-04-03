import React, { ReactElement, useEffect, useState } from "react";
import localforage from "localforage";

import type { Person } from "../types/person";

import { LabeledInput, Loading } from "../components";
import { initialPerson } from "../utils";

const savePerson = (person: Person | null): void => {
  console.log("Saving", person);

  localforage.setItem("person", person);
};

export function PersonEditor(): ReactElement {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    const getPerson = async () => {
      const person = await localforage.getItem<Person>("person");
      setPerson(person ?? initialPerson);
    };
    getPerson();
  }, []);

  useEffect(() => {
    savePerson(person);
  }, [person]);

  if (!person) {
    return <Loading />;
  }

  return (
    <form
      className="person-editor"
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Submitting\n${JSON.stringify(person, null, 2)}`);
      }}
    >
      <h2>Person Editor</h2>
      <LabeledInput
        label="Firstname:"
        value={person.firstname}
        onChange={(e) => {
          setPerson({ ...person, firstname: e.target.value });
        }}
      />
      <LabeledInput
        label="Surname:"
        value={person.surname}
        onChange={(e) => {
          setPerson({ ...person, surname: e.target.value });
        }}
      />
      <LabeledInput
        label="Email:"
        value={person.email}
        onChange={(e) => {
          setPerson({ ...person, email: e.target.value });
        }}
      />
      <LabeledInput
        label="Address:"
        value={person.address}
        onChange={(e) => {
          setPerson({ ...person, address: e.target.value });
        }}
      />
      <LabeledInput
        label="Phone:"
        value={person.phone}
        onChange={(e) => {
          setPerson({ ...person, phone: e.target.value });
        }}
      />
      <button className="btn btn-primary">Save</button>
      <hr />
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </form>
  );
}
