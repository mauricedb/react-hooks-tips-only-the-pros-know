import React, { ReactElement } from "react";

import { initialPerson } from "../utils";
import { IndexedPerson } from "../types/IndexedPerson";

// Kimrof = Formik reversed :-)
import { PersonEditor } from "./PersonEditor";
import { Kimrof } from "./kimrof";

export function KimrofPersonEditor(): ReactElement {
  return (
    <Kimrof
      initialValues={initialPerson as IndexedPerson}
      onSubmit={(person) => {
        alert(`Submitting\n${JSON.stringify(person, null, 2)}`);
      }}
    >
      <PersonEditor />
    </Kimrof>
  );
}
