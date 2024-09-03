"use client";

import React, { ReactElement } from "react";
import { Mood } from "@/types/mood";
import { moodEmojis } from "../moods/utils";

interface MoodButtonProps {
  mood: Mood;
  children: string | ReactElement;
  action: (payload: Mood) => void;
}

export const MoodButton = ({ mood, children, action }: MoodButtonProps) => {
  return (
    <button
      onClick={() => action(mood)}
      type="button"
      className="button-mood button--animate-press"
    >
      <span className="sr-only">{children}</span>
      {moodEmojis[mood]}
    </button>
  );
};
