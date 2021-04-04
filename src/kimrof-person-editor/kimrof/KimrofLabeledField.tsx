import React, { ReactElement } from "react";

import { LabeledInput } from "../../components";
import { useKimrofField } from "./useKimrofField";

interface Props
  extends Omit<
    React.ComponentProps<typeof LabeledInput>,
    "onChange" | "value"
  > {
  name: string;
}

export function KimrofLabeledField(props: Props): ReactElement {
  const fieldProps = useKimrofField(props.name);

  return <LabeledInput {...props} {...fieldProps} />;
}
