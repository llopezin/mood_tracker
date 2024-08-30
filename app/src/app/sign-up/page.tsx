import { SignUpForm } from "@/components/organisms/signup/signUpForm";
import React from "react";

export default function Page() {
  return (
    <>
      <h1>Sign up</h1>
      <div className="card form-card">
        <SignUpForm />
      </div>
    </>
  );
}
