"use client";

import cookieNames from "../../utils/cookie/cookieNames.mjs";
import UserNav from "./userNav";
import NonUserNav from "./nonUserNav";
import { useEffect, useState } from "react";

export const MainNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = document.cookie.includes(cookieNames.token);
    setIsLoggedIn(loggedIn);
  }, [setIsLoggedIn]);

  return (
    <nav className="main-nav card">
      {isLoggedIn ? <UserNav /> : <NonUserNav />}
    </nav>
  );
};
