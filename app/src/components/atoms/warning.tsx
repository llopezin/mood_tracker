import React from "react";

interface WarningProps {
  children: string;
  type: WarningType;
}

export enum WarningType {
  Error = "error",
  Friendly = "friendly",
}

export const Warning = ({ children, type }: WarningProps) => {
  return <div className={`warning--${type}`}>{children}</div>;
};
