"use client";

import { handleLogout } from "@/actions/logout";

export const LogOut = () => {
  return <button onClick={() => handleLogout()}>Log out</button>;
};
