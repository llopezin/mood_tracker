"use client";

import React, { use } from "react";
import Link from "next/link";
import { LogOutButton } from "@/components/molecules/logOutButton/logOutButton";
import { usePathname } from "next/navigation";
import cookieNames from "../../../../cookieNames.mjs";

export const MainNav = () => {
  const loggedIn = document.cookie.includes(cookieNames.token);

  return (
    <nav className="main-nav card">
      {loggedIn && <MainNavLink href="/">Home</MainNavLink>}
      {loggedIn && <MainNavLink href="/registry">Registry</MainNavLink>}
      {loggedIn && <LogOutButton />}

      {!loggedIn && <MainNavLink href="/login">Log in</MainNavLink>}
      {!loggedIn && <MainNavLink href="/sign-up">Sign up</MainNavLink>}
    </nav>
  );
};

const MainNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const active = usePathname();

  return (
    <Link
      href={href}
      className={active === href ? "main-nav-link--active" : ""}
    >
      {children}
    </Link>
  );
};
