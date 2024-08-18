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
import { FormState } from "@/components/molecules/form";
import { revalidatePath } from "next/cache";

//TODO: extract messages
//TODO: implement validation

export async function handleSignUpSubmission(_: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const variables = { email, password };

  try {
    const { data } = await getClient().mutate({
      mutation: PostUserMutationDocument,
      variables,
    });

    const token = data?.postUser;
    if (token) cookies().set(cookieNames.token, token);

    return { message: "Success!", success: true };
  } catch (e: any) {
    return { message: "Error", success: false };
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

    return { message: "Success!", success: true };
  } catch (e: any) {
    return { message: "Error", success: false };
  }
}

export async function handleMoodSubmission(mood: Mood) {
  try {
    await getClient().mutate({
      mutation: PostMoodMutationDocument,
      variables: { mood },
    });

    revalidatePath("/registry");

    return { message: "Success!", success: true };
  } catch (e: any) {
    return { message: "Error", success: false };
  }
}
