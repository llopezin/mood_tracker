"use client";

import { LogOutButton } from "@/components/atoms/logOutButton";
import cookieNames from "../../../../cookieNames.mjs";
import NavLink from "./navLink";

export const MainNav = () => {
  const isClient = typeof document !== "undefined";
  const loggedIn = isClient
    ? document.cookie.includes(cookieNames.token)
    : false;

  return (
    <nav className="main-nav card">
      {loggedIn && (
        <NavLink activeClass="main-nav-link--active" href="/">
          Home
        </NavLink>
      )}
      {loggedIn && (
        <NavLink activeClass="main-nav-link--active" href="/registry">
          Registry
        </NavLink>
      )}
      {loggedIn && <LogOutButton />}

      {!loggedIn && (
        <NavLink activeClass="main-nav-link--active" href="/login">
          Log in
        </NavLink>
      )}
      {!loggedIn && (
        <NavLink activeClass="main-nav-link--active" href="/sign-up">
          Sign up
        </NavLink>
      )}
    </nav>
  );
};
