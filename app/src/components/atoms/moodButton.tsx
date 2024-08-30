"use client";

import React, { ReactElement } from "react";
import { handleMoodSubmission } from "@/app/actions";
import { Mood } from "@/types/mood";
import { moodEmojis } from "../molecules/moods/utils";

interface MoodButtonProps {
  mood: Mood;
  children: string | ReactElement;
}

export const MoodButton = ({ mood, children }: MoodButtonProps) => {
  return (
    <button
      type="button"
      className="button-mood button--animate-press"
      onClick={() => handleMoodSubmission(mood)}
    >
      <span className="sr-only">{children}</span>
      {moodEmojis[mood]}
    </button>
  );
};
