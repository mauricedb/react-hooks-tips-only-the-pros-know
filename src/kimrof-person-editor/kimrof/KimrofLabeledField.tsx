import React, { ReactElement } from "react";

import { LabeledInput } from "../../components";

interface Props
  extends Omit<
    React.ComponentProps<typeof LabeledInput>,
    "onChange" | "value"
  > {
  name: string;
}

export function KimrofLabeledField(props: Props): ReactElement {
  return <LabeledInput {...props} />;
}
