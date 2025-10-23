import {
  FormValidation,
  ZodIssue,
} from "@/components/design-system/form/types";

export const transfromZodValidation = (issues: ZodIssue[]): FormValidation => {
  const fieldsWithError = issues.map((error) => error.path[0]);
  const fieldsValidation = issues.reduce((a, error) => {
    a[error.path[0]] = { isValid: false, message: error.message };

    return a;
  }, {} as FormValidation["fieldsValidation"]);

  return { fieldsValidation, fieldsWithError };
};
