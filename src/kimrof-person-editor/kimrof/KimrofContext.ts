import React from "react";

import { KimrofObject, KimrofProperty } from "./Types";

export interface KimrofContext {
  values: KimrofObject;
}

export const kimrofContext = React.createContext<KimrofContext>({
  values: {},
});
