"use client";

import { useFormState, useFormStatus } from "react-dom";
import { initialFormState } from "@/components/molecules/form/initializers";
import { Mood } from "@/types/mood";
import { handleMoodSubmission } from "@/app/actions";
import { MoodButton } from "./moodButton";
import { Warning, WarningType } from "@/components/atoms/warning";

export interface PostMoodState {
  message: string;
  success: boolean;
}

export default function MoodSelector() {
  const formState = useFormState<PostMoodState, Mood>(
    handleMoodSubmission,
    initialFormState
  );
  const [{ message }, formAction] = formState;
  const { pending } = useFormStatus();

  return (
    <form>
      <div className="card moods">
        <MoodButton mood={1} action={formAction}>
          very sad
        </MoodButton>
        <MoodButton mood={2} action={formAction}>
          sad
        </MoodButton>
        <MoodButton mood={3} action={formAction}>
          content
        </MoodButton>
        <MoodButton mood={4} action={formAction}>
          happy
        </MoodButton>
        <MoodButton mood={5} action={formAction}>
          very happy
        </MoodButton>
      </div>
      {pending}
      {message && <Warning type={WarningType.Friendly}>{message}</Warning>}
    </form>
  );
}
