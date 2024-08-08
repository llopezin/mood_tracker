"use client";

import React from "react";
import { handleMoodSubmission } from "@/app/actions";
import { Mood } from "@/types/mood";

interface MoodButtonProps {
  mood: Mood;
}

export const MoodButton = ({ mood }: MoodButtonProps) => {
  return (
    <button type="button" onClick={() => handleMoodSubmission(mood)}>
      {mood}
    </button>
  );
};
