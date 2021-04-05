import React from "react";

import { KimrofObject, KimrofProperty } from "./Types";

export interface KimrofContext {
  isDirty: boolean;
  values: KimrofObject;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setFieldValue: (name: string, value: KimrofProperty) => void;
}

export const kimrofContext = React.createContext<KimrofContext>({
  isDirty: false,
  values: {},
  onSubmit: () => void null,
  setFieldValue: () => void null,
});
