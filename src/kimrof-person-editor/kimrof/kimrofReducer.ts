import { KimrofObject, KimrofProperty } from "./Types";

interface SetPropertyAction {
  type: "set-property";
  payload: { name: string; value: KimrofProperty };
}

type AllActions = SetPropertyAction;

interface FormState {
  isDirty: boolean;
  isValid: boolean;
}

interface ReducerState {
  values: KimrofObject;
  formState: FormState;
}

export function kimrofReducer(
  state: ReducerState,
  action: AllActions
): ReducerState {
  return state;
}
