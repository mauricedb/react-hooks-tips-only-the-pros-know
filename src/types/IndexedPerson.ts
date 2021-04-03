import { Person } from "./person";
import { KimrofProperty } from "../kimrof-person-editor/kimrof/Types";

export interface IndexedPerson extends Person {
  [key: string]: KimrofProperty;
}
