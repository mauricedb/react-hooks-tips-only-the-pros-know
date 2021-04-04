// Kimrof = Formik reversed :-)

import React, { ReactElement, ReactNode, useReducer } from "react";

import { KimrofObject, KimrofProperty } from "./Types";
import { KimrofContext, kimrofContext } from "./KimrofContext";
import { kimrofReducer } from "./kimrofReducer";

interface Props<TData> {
  children: ReactNode;
  initialValues: TData;
}

export function Kimrof<TData extends KimrofObject>({
  children,
  initialValues,
}: Props<TData>): ReactElement {
  const [
    {
      values,
      formState: { isDirty },
    },
    dispatch,
  ] = useReducer(kimrofReducer, {
    values: initialValues,
    formState: { isDirty: false, isValid: true },
  });

  const context: KimrofContext = React.useMemo(
    () => ({
      isDirty,
      values,
    }),
    [isDirty, values]
  );

  return (
    <kimrofContext.Provider value={context}>{children}</kimrofContext.Provider>
  );
}
