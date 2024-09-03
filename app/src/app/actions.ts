"use server";

import {
  LoginQueryDocument,
  PostMoodMutationDocument,
  PostUserMutationDocument,
} from "@/generated/graphql";
import { getClient } from "@/apollo/apollo";
import { Mood } from "@/types/mood";
import { cookies } from "next/headers";
import cookieNames from "../../cookieNames.mjs";

import { revalidatePath } from "next/cache";
import { SignUpValidation } from "@/components/organisms/signup/signUpFormValidation";
import { transfromZodValidation } from "@/components/molecules/form/utils/transformZodValidation";
import { initialFormValidation } from "@/components/molecules/form/initializers";
import { FormState, FormValidation } from "@/components/molecules/form/types";
import { PostMoodState } from "./page";
import { errorCodes } from "@/error/codes";
import messages from "@/error/messages";
import { redirect } from "next/navigation";

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

export async function handleMoodSubmission(_: PostMoodState, mood: Mood) {
  try {
    const res = await getClient().mutate({
      mutation: PostMoodMutationDocument,
      variables: { mood },
    });

    revalidatePath("/registry");

    return { message: messages.moodSubmission.success, success: true };
  } catch (e: any) {
    const code = e.cause.extensions.code;
    const alreadyPostedMood = code === errorCodes.alreadyPostedMood;
    const message = alreadyPostedMood
      ? messages.moodSubmission.alreadyPostedMood
      : messages.moodSubmission.error;

    return { message, success: false };
  }
}

export async function handleLogout() {
  cookies().delete(cookieNames.token);
  revalidatePath("/", "layout");
  redirect("/");
}
