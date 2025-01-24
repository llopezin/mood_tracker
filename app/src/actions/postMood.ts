"use server";

import { Mood } from "@/types/mood";
import { errorCodes } from "@/utils/error/codes";
import { WarningType } from "@/components/atoms/warning";
import { getClient } from "@/apollo/apollo";
import { PostMoodMutationDocument } from "@/generated/graphql";
import { revalidatePath } from "next/cache";
import messages from "@/utils/error/messages";
import { PostMoodState } from "@/app/page";

export async function handleMoodSubmission(_: PostMoodState, mood: Mood) {
  console.log("mood: ", mood);
  console.log("mood type: ", typeof mood);
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
    const messageType = WarningType.Error;
    const message = alreadyPostedMood
      ? messages.moodSubmission.alreadyPostedMood
      : messages.moodSubmission.error;

    return { message, messageType, success: false };
  }
}
