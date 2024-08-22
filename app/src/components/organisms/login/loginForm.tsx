"use client";

import { handleLoginSubmission } from "@/app/actions";
import { Input } from "@/components/atoms/input";
import { Form } from "@/components/molecules/form/form";

import React from "react";
import { useFormStatus } from "react-dom";

export const LoginForm = () => {
  const { pending } = useFormStatus();

  return (
    <Form action={handleLoginSubmission} successRedirectUrl="/">
      <Input name="email" label="email" type="email" />
      <Input name="password" label="Password" type="password" />

      <button type="submit" disabled={pending}>
        Log in
      </button>
    </Form>
  );
};
