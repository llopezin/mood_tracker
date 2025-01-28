"use client";

import { Mood, moodEmojis } from "@/types/mood";
import React, { ReactElement } from "react";

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
      {moodEmojis.get(mood)}
    </button>
  );
};
