import { LoginForm } from "@/components/login/loginForm";

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
