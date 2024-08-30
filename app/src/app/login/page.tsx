import { LoginForm } from "@/components/organisms/login/loginForm";
import React from "react";

export default function Page() {
  return (
    <>
      <h1>Log in</h1>
      <div className="card form-card">
        <LoginForm />
      </div>
    </>
  );
}
