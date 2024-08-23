"use client";

import { handleSignUpSubmission } from "@/app/actions";
import { Input } from "@/components/atoms/input";
import { Form } from "@/components/molecules/form/form";

import React from "react";
import { useFormStatus } from "react-dom";

export const SignUpForm = () => {
  const { pending } = useFormStatus();

  return (
    <Form action={handleSignUpSubmission} successRedirectUrl="/">
      <Input name="email" label="email" type="email" />
      <Input name="password" label="Password" type="password" />

      <button type="submit" disabled={pending}>
        Sign up
      </button>
    </Form>
  );
};
