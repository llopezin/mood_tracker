import { z } from "zod";

export const SignUpValidation = z.object({
  email: z.string().trim().email(),
  password: z.string(),
});

// Type generation
// type SignUpValidation = z.infer<typeof SignUpValidation>;
