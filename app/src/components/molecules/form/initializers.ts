import { FormState } from "./types";

export const initialFormValidation = {
  fieldsValidation: {},
  fieldsWithError: [],
};

export const initialFieldValidation = {
  isValid: true,
  message: "",
};

export const initialFormState: FormState = {
  message: "",
  success: false,
  validation: initialFormValidation,
};
