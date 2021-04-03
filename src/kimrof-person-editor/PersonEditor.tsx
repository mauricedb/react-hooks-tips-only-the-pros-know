import React, { ReactElement } from "react";
import { KimrofLabeledField } from "./kimrof";

export function PersonEditor(): ReactElement {
  const values = "To be determined";
  const isDirty = false;

  return (
    <form className="person-editor">
      <h2>Kimrof Person Editor</h2>
      <KimrofLabeledField label="Firstname:" name="firstname" />
      <KimrofLabeledField label="Surname:" name="surname" />
      <KimrofLabeledField label="Email:" name="email" />
      <KimrofLabeledField label="Address:" name="address" />
      <KimrofLabeledField label="Phone:" name="phone" />
      <button className="btn btn-primary" disabled={!isDirty}>
        Save
      </button>
      <hr />
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </form>
  );
}
