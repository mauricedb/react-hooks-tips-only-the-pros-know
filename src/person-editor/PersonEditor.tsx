import React, { ReactElement, useEffect, useState } from "react";
import localforage from "localforage";

import type { Person } from "../types/person";

import { LabeledInput, Loading } from "../components";
import { initialPerson } from "../utils";
import { usePerson } from "./usePerson";

export function PersonEditor(): ReactElement {
  const [person, setProperty, { isDirty }] = usePerson(initialPerson);

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
          setProperty("firstname", e.target.value);
        }}
      />
      <LabeledInput
        label="Surname:"
        value={person.surname}
        onChange={(e) => {
          setProperty("surname", e.target.value);
        }}
      />
      <LabeledInput
        label="Email:"
        value={person.email}
        onChange={(e) => {
          setProperty("email", e.target.value);
        }}
      />
      <LabeledInput
        label="Address:"
        value={person.address}
        onChange={(e) => {
          setProperty("address", e.target.value);
        }}
      />
      <LabeledInput
        label="Phone:"
        value={person.phone}
        onChange={(e) => {
          setProperty("phone", e.target.value);
        }}
      />
      <button className="btn btn-primary" disabled={!isDirty}>
        Save
      </button>
      <hr />
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </form>
  );
}
