import WarningProps from "./types";

export const Warning = ({ children, type }: WarningProps) => {
  return <div className={`warning--${type}`}>{children}</div>;
};
