"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}

export const FormButton = ({ text }: FormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="button--primary button--animate-press"
      type="submit"
      disabled={pending}
    >
      {text}
    </button>
  );
};
