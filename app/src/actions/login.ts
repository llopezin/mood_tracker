"use server";

import { getClient } from "@/apollo/apollo";
import { initialFormValidation } from "@/components/form/initializers";
import { FormState } from "@/components/form/types";
import { LoginQueryDocument } from "@/generated/graphql";
import cookieNames from "@/utils/cookie/cookieNames.mjs";
import messages from "@/utils/error/messages";
import { cookies } from "next/headers";

export async function handleLoginSubmission(_: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const variables = { email, password };

  try {
    const { data } = await getClient().query({
      query: LoginQueryDocument,
      variables,
    });

    const token = data?.loginUser;
    if (token) cookies().set(cookieNames.token, token);

    return {
      message: messages.userSubmission.success,
      success: true,
      validation: initialFormValidation,
    };
  } catch (e: any) {
    return {
      message: messages.userSubmission.defaultError,
      success: false,
      validation: initialFormValidation,
    };
  }
}
