// Kimrof = Formik reversed :-)

import React, { ReactElement, ReactNode } from "react";

import { KimrofObject, KimrofProperty } from "./Types";

interface Props<TData> {
  children: ReactNode;
}

export function Kimrof<TData extends KimrofObject>({
  children,
}: Props<TData>): ReactElement {
  return <>{children}</>;
}
