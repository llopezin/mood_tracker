"use client";

import React from "react";
import { useValidation } from "../molecules/form/validation.context";

interface InputProps {
  label?: string;
  type?: string;
  name: string;
}

const defaultType = "text";

export const Input = ({ label, type = defaultType, name }: InputProps) => {
  const { isValid, message } = useValidation(name);

  return (
    <label>
      {label}
      <input type={type} name={name} aria-invalid={!isValid} />
      {!isValid && <span>{message}</span>}
    </label>
  );
};
