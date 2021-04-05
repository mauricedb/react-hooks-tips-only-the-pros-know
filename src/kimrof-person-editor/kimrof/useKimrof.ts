import React from "react";

import { KimrofObject } from "./Types";
import { kimrofContext } from "./KimrofContext";

interface UseKimrof {
  isDirty: boolean;
  values: KimrofObject;
}

export const useKimrof = (): UseKimrof => {
  const { values, isDirty } = React.useContext(kimrofContext);

  return {
    isDirty,
    values,
  };
};
