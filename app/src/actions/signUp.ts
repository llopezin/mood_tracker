"use server";

import { getClient } from "@/apollo/apollo";
import { initialFormValidation } from "@/components/form/initializers";
import { FormState, FormValidation } from "@/components/form/types";
import { transfromZodValidation } from "@/components/form/utils/transformZodValidation";
import { SignUpValidation } from "@/components/signup/signUpFormValidation";
import { PostUserMutationDocument } from "@/generated/graphql";
import cookieNames from "@/utils/cookie/cookieNames.mjs";
import messages from "@/utils/error/messages";
import { cookies } from "next/headers";

export async function handleSignUpSubmission(_: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const variables = { email, password };

  let validation: FormValidation = initialFormValidation;

  try {
    SignUpValidation.parse(variables);
  } catch (zodError: any) {
    validation = transfromZodValidation(zodError.issues);

    return {
      message: messages.userSubmission.defaultError,
      success: false,
      validation,
    };
  }

  try {
    const { data } = await getClient().mutate({
      mutation: PostUserMutationDocument,
      variables,
    });

    const token = data?.postUser;
    if (token) cookies().set(cookieNames.token, token);

    return {
      message: messages.userSubmission.success,
      success: true,
      validation,
    };
  } catch (e: any) {
    return {
      message: messages.userSubmission.defaultError,
      success: false,
      validation,
    };
  }
}
