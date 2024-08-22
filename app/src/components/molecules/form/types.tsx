export interface FormValidation {
  fieldsValidation: Record<string, FieldValidation>;
  fieldsWithError: string[];
}

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
