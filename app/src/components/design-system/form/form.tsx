"use client";

import { redirect } from "next/navigation";

import { useFormState } from "react-dom";
import { ValidationContext } from "./validation.context";
import { FormProps, FormState } from "./types";
import { initialFormState } from "./initializers";

export const Form = ({ action, children, successRedirectUrl }: FormProps) => {
  console.log("action: ", action);
  const formState = useFormState<FormState, FormData>(action, initialFormState);
  console.log("formState: ", formState);
  const [{ message, success, validation }, formAction] = formState;

  if (success && successRedirectUrl) redirect(successRedirectUrl);

  return (
    <ValidationContext.Provider value={validation}>
      <form action={formAction}>
        {children}

        {message && <p>{message}</p>}
      </form>
    </ValidationContext.Provider>
  );
};
