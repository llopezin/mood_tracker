import { FormValidation, ZodIssue } from "@/components/molecules/form/types";

//TODO: Implement nested fields validation
export const transfromZodValidation = (issues: ZodIssue[]): FormValidation => {
  // Path array contains an array of input and its parent input names
  // 0 is the lowest level one
  const fieldsWithError = issues.map((error) => error.path[0]);
  const fieldsValidation = issues.reduce((a, error) => {
    a[error.path[0]] = { isValid: false, message: error.message };

    return a;
  }, {} as FormValidation["fieldsValidation"]);

  return { fieldsValidation, fieldsWithError };
};
