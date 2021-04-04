import React from "react";

import { KimrofProperty } from "./Types";
import { kimrofContext } from "./KimrofContext";

interface UseKimrofField {
  value: KimrofProperty;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useKimrofField = (name?: string): UseKimrofField => {
  if (!name) {
    throw new Error("The name prop is required");
  }
  const { values, setFieldValue } = React.useContext(kimrofContext);

  return {
    value: values[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue(e.target.name, e.target.value);
    },
  };
};
