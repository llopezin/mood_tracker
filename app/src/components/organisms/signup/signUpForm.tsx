import { handleSignUpSubmission } from "@/app/actions";
import { FormButton } from "@/components/atoms/formButton";
import { Input } from "@/components/atoms/input";
import { Form } from "@/components/molecules/form/form";

import React from "react";

export const SignUpForm = () => {
  return (
    <Form action={handleSignUpSubmission} successRedirectUrl="/">
      <Input name="email" label="Email" type="email" />
      <Input name="password" label="Password" type="password" />

      <FormButton text="Sign up" />
    </Form>
  );
};
