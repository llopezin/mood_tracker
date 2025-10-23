"use client";

import { useEffect, useState } from "react";
import cookieNames from "../../../utils/cookie/cookieNames.mjs";
import UserNav from "./userNav";
import NonUserNav from "./nonUserNav";

export const MainNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(document.cookie.includes(cookieNames.token));
  });

  return (
    <nav className="main-nav card">
      {isLoggedIn ? <UserNav /> : <NonUserNav />}
    </nav>
  );
};
