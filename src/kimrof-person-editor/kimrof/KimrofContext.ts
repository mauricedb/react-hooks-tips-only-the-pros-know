import React from "react";

import { KimrofObject, KimrofProperty } from "./Types";

export interface KimrofContext {
  isDirty: boolean;
  values: KimrofObject;
  setFieldValue: (name: string, value: KimrofProperty) => void;
}

export const kimrofContext = React.createContext<KimrofContext>({
  isDirty: false,
  values: {},
  setFieldValue: () => void null,
});
