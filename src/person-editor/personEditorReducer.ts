import { Person } from "../types/person";

export interface FormState {
  isDirty: boolean;
  isValid: boolean;
}

interface ReducerState {
  person: Person | null;
  formState: FormState;
}

interface SetPersonAction {
  type: "set-initial-person";
  payload: Person;
}

interface SetPropertyAction {
  type: "set-property";
  payload: { name: string; value: unknown };
}

type SomeAction = SetPersonAction | SetPropertyAction;

export function personEditorReducer(
  state: ReducerState,
  action: SomeAction
): ReducerState {
  switch (action.type) {
    case "set-initial-person":
      return { ...state, person: action.payload };
    case "set-property":
      return {
        ...state,
        formState: { ...state.formState, isDirty: true },
        person: {
          ...(state.person ?? {
            id: 0,
            firstname: "",
            surname: "",
            address: "",
            balance: 0,
            email: "",
            picture: "",
            phone: "",
          }),
          [action.payload.name]: action.payload.value,
        },
      };
  }

  return state;
}
