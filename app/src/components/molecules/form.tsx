"use client";

import { redirect } from "next/navigation";

import React, { ReactElement } from "react";
import { useFormState } from "react-dom";

export interface FormState {
  message: string;
  success: boolean;
}

const initialState: FormState = {
  message: "",
  success: false,
};

interface FormProps {
  action: formAction;
  children: ReactElement[];
  successRedirectUrl?: string;
}

type formAction = (
  _: FormState,
  formData: FormData
) => Promise<{ message: string; success: boolean }>;

export const Form = ({ action, children, successRedirectUrl }: FormProps) => {
  const [{ message, success }, formAction] = useFormState<FormState, FormData>(
    action,
    initialState
  );

  if (success && successRedirectUrl) redirect(successRedirectUrl);

  return (
    <form action={formAction}>
      {children}

      {message && <p>{message}</p>}
    </form>
  );
};
