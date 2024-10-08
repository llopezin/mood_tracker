"use client";

import { createContext, use } from "react";
import { FormValidation } from "./types";
import { initialFieldValidation, initialFormValidation } from "./initializers";

export const ValidationContext = createContext<FormValidation>(
  initialFormValidation
);

export const useValidation = (fieldName: string) => {
  const context = use(ValidationContext);

  if (context === undefined) {
    throw new Error("useValidation must be used within a ValidationProvider");
  }

  const { fieldsWithError, fieldsValidation } = context;
  const hasErrors = fieldsWithError.includes(fieldName);

  return hasErrors ? fieldsValidation[fieldName] : initialFieldValidation;
};
