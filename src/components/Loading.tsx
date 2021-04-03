import React, { ReactElement } from "react";
import classes from "./Loading.module.css";

export function Loading(): ReactElement {
  return <div className={classes.loading} />;
}
