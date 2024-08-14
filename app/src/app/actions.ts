"use server";

import {
  PostMoodMutationDocument,
  PostUserMutationDocument,
} from "@/generated/graphql";
import { getClient } from "@/service/apollo";
import { Mood } from "@/types/mood";
import { cookies } from "next/headers";
import cookieNames from "../../cookieNames.mjs";
import { FormState } from "@/components/molecules/form";

//TODO: extract messages

export async function handleSubmission(_: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { data } = await getClient().mutate({
      mutation: PostUserMutationDocument,
      variables: {
        email,
        password,
      },
    });

    const token = data?.postUser;
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

    return { message: "Success!", success: true };
  } catch (e: any) {
    return { message: "Error", success: false };
  }
}
