"use client";

import { useFormState, useFormStatus } from "react-dom";
import { initialFormState } from "@/components/design-system/form/initializers";
import { Mood, moodNames } from "@/types/mood";
import { MoodButton } from "./moodButton";
import { Warning } from "@/components/design-system/warning/warning";
import { handleMoodSubmission } from "@/actions/postMood";
import { WarningType } from "@/components/design-system/warning/types";

export interface PostMoodState {
  message: string;
  success: boolean;
  messageType?: WarningType;
}

export default function MoodSelector() {
  const formState = useFormState<PostMoodState, Mood>(
    handleMoodSubmission,
    initialFormState
  );
  const [{ message, messageType = WarningType.Friendly }, formAction] =
    formState;
  const { pending } = useFormStatus();
  const moodKeys = [...moodNames.keys()];

  return (
    <form>
      <div className="card moods">
        {moodKeys.map((moodKey) => (
          <MoodButton mood={moodKey} key={moodKey} action={formAction}>
            {moodNames.get(moodKey)}
          </MoodButton>
        ))}
      </div>
      {pending}
      {message && <Warning type={messageType}>{message}</Warning>}
    </form>
  );
}
