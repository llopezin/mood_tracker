import React from "react";
import Link from "next/link";

export const MainNav = () => {
  return (
    <nav className="main-nav card">
      <Link href="/">Home</Link>
      <Link href="/registry">Registry</Link>
      <Link href="/login">Log in</Link>
      <Link href="/sign-up">Sign up</Link>
    </nav>
  );
};
