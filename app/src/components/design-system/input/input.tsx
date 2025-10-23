"use client";

import { useValidation } from "../form/validation.context";
import InputProps from "./types";

const defaultType = "text";

export const Input = ({
  label,
  type = defaultType,
  name,
  ...rest
}: InputProps) => {
  const { isValid, message } = useValidation(name);

  return (
    <label>
      {label}
      <input type={type} name={name} aria-invalid={!isValid} {...rest} />
      {!isValid && <span>{message}</span>}
    </label>
  );
};
