"use client";

import React from "react";
import styles from "./logOutButton.module.scss";
import { handleLogout } from "@/app/actions";

export const LogOutButton = () => {
  return <button onClick={() => handleLogout()}>Log out</button>;
};
