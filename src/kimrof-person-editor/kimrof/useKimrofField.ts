import React from "react";

import { KimrofProperty } from "./Types";
import { kimrofContext } from "./KimrofContext";

interface UseKimrofField {
  value: KimrofProperty;
}

export const useKimrofField = (name?: string): UseKimrofField => {
  if (!name) {
    throw new Error("The name prop is required");
  }
  const { values } = React.useContext(kimrofContext);

  return {
    value: values[name],
  };
};
