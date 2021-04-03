import React, { InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function LabeledInput({
  id,
  label,
  className,
  ...props
}: Props): ReactElement {
  return (
    <div className={classNames("form-group", className)}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      <input {...props} id={id} className="form-control" />
    </div>
  );
}
