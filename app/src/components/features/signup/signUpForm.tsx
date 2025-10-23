"use client";

import { handleSignUpSubmission } from "@/actions/signUp";
import { Input } from "@/components/design-system/input/input";
import { Form } from "@/components/design-system/form/form";

import { useFormStatus } from "react-dom";

export const SignUpForm = () => {
  const { pending } = useFormStatus();

  return (
    <Form action={handleSignUpSubmission} successRedirectUrl="/">
      <Input name="email" label="Email" type="email" />
      <Input name="password" label="Password" type="password" />

      <button className="button--primary" type="submit" disabled={pending}>
        Sign up
      </button>
    </Form>
  );
};
