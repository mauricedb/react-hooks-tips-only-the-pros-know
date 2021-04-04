import { KimrofObject, KimrofProperty } from "./Types";

interface SetPropertyAction {
  type: "set-property";
  payload: { name: string; value: KimrofProperty };
}

type SomeAction = SetPropertyAction;

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
  action: SomeAction
): ReducerState {
  switch (action.type) {
    case "set-property":
      return {
        ...state,
        formState: { ...state.formState, isDirty: true },
        values: {
          ...state.values,
          [action.payload.name]: action.payload.value,
        },
      };
  }

  return state;
}
