"use client";

import { handleSubmission } from "@/app/actions";
import { redirect } from "next/navigation";

import React from "react";
import { useFormStatus, useFormState } from "react-dom";

export interface LoginFormState {
  message: string;
  success: boolean;
}

const initialState: LoginFormState = {
  message: "",
  success: false,
};

export const SignUpForm = () => {
  const { pending } = useFormStatus();

  const [{ message, success }, formAction] = useFormState<
    LoginFormState,
    FormData
  >(handleSubmission, initialState);

  if (success) redirect(`/`);

  return (
    <form action={formAction}>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>

      <button type="submit" disabled={pending}>
        Login
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};
