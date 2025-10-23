import { ReactElement } from "react";

export interface FormState {
  message: string;
  success: boolean;
  validation: FormValidation;
}

export interface FormValidation {
  fieldsValidation: Record<string, FieldValidation>;
  fieldsWithError: string[];
}

export interface FormProps {
  action: formAction;
  children: ReactElement[];
  successRedirectUrl?: string;
  bypassValidation?: boolean;
}

type formAction = (_: FormState, formData: FormData) => Promise<FormState>;

export type FieldValidation = {
  isValid: boolean;
  message: string;
};

export interface ZodValidationReturn {
  issues: ZodIssue[];
}

export interface ZodIssue {
  validation: string;
  code: string;
  message: string;
  path: string[];
}
