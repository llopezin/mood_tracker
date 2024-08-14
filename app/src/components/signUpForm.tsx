"use client";

import { handleSubmission } from "@/app/actions";

import React from "react";
import { useFormStatus } from "react-dom";
import { Form } from "./molecules/form";
import { Input } from "./atoms/input";

export const SignUpForm = () => {
  const { pending } = useFormStatus();

  return (
    <Form action={handleSubmission}>
      <Input name="email" label="email" type="email" />
      <Input name="password" label="Password" type="password" />

      <button type="submit" disabled={pending} />
    </Form>
  );
};
