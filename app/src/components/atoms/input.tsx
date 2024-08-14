import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  name: string;
}

const defaultType = "text";

export const Input = ({ label, type = defaultType, name }: InputProps) => {
  return (
    <label>
      {label}
      <input type={type} name={name} />
    </label>
  );
};
