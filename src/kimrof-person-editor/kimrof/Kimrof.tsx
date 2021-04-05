// Kimrof = Formik reversed :-)

import React, { ReactElement, ReactNode, useReducer } from "react";

import { KimrofObject, KimrofProperty } from "./Types";
import { KimrofContext, kimrofContext } from "./KimrofContext";
import { kimrofReducer } from "./kimrofReducer";

interface Props<TData> {
  children: ReactNode;
  initialValues: TData;
  onSubmit: (values: TData) => void;
}

export function Kimrof<TData extends KimrofObject>({
  children,
  initialValues,
  onSubmit,
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
      onSubmit: (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(values as TData);
      },
      setFieldValue: (name: string, value: KimrofProperty) => {
        dispatch({ type: "set-property", payload: { name, value } });
      },
    }),
    [isDirty, onSubmit, values]
  );

  return (
    <kimrofContext.Provider value={context}>{children}</kimrofContext.Provider>
  );
}
