"use client";

import { redirect } from "next/navigation";

import React, { ReactElement } from "react";
import { useFormState } from "react-dom";
import { ValidationContext } from "./validation.context";
import { FormProps, FormState, FormValidation } from "./types";
import { initialFormValidation, initialFormState } from "./initializers";

export const Form = ({
  action,
  children,
  successRedirectUrl,
  bypassValidation = false,
}: FormProps) => {
  const formState = useFormState<FormState, FormData>(action, initialFormState);
  const [{ message, success, validation }, formAction] = formState;

  if (success && successRedirectUrl) redirect(successRedirectUrl);

  const form = (
    <form action={formAction}>
      {children}

      {message && <p>{message}</p>}
    </form>
  );

  return bypassValidation ? (
    form
  ) : (
    <ValidationContext.Provider value={validation}>
      {form}
    </ValidationContext.Provider>
  );
};
