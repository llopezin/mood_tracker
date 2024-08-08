"use server";

import { LoginFormState } from "@/components/signUpForm";
import {
  PostMoodMutationDocument,
  PostUserMutationDocument,
} from "@/generated/graphql";
import { getClient } from "@/service/apollo";
import { Mood } from "@/types/mood";
import { cookies } from "next/headers";

//TODO: extract messages

export async function handleSubmission(_: LoginFormState, formData: FormData) {
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
    if (token) cookies().set("token", token);

    return { message: "Success!", success: true };
  } catch (e: any) {
    return { message: "Error", success: false };
  }
}

export async function handleMoodSubmission(mood: Mood) {
  try {
    const data = await getClient().mutate({
      mutation: PostMoodMutationDocument,
      variables: { mood },
    });
    console.log("data: ", data);

    return { message: "Success!", success: true };
  } catch (e: any) {
    console.log("e: ", e);
    return { message: "Error", success: false };
  }
}
