import React from "react";

import { kimrofContext } from "./KimrofContext";

interface UseKimrofForm {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useKimrofForm = (): UseKimrofForm => {
  const { onSubmit } = React.useContext(kimrofContext);

  return {
    onSubmit,
  };
};
