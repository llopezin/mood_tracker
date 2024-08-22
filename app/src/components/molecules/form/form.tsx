"use client";

import { redirect } from "next/navigation";

import React, { ReactElement } from "react";
import { useFormState } from "react-dom";
import { ValidationContext } from "./validation.context";
import { FormValidation } from "./types";
import { initialFormValidation } from "./initializers";

export interface FormState {
  message: string;
  success: boolean;
  validation: FormValidation;
}

const initialState: FormState = {
  message: "",
  success: false,
  validation: initialFormValidation,
};

interface FormProps {
  action: formAction;
  children: ReactElement[];
  successRedirectUrl?: string;
  bypassValidation?: boolean;
}

type formAction = (_: FormState, formData: FormData) => Promise<FormState>;

export const Form = ({
  action,
  children,
  successRedirectUrl,
  bypassValidation = false,
}: FormProps) => {
  const [{ message, success, validation }, formAction] = useFormState<
    FormState,
    FormData
  >(action, initialState);

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
