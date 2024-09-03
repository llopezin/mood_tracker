import { GetMoodsQueryDocument, MoodEntry } from "@/generated/graphql";
import { query } from "@/apollo/apollo";
import React from "react";
import { moodEmojis } from "./utils";

export default async function MoodList() {
  const { data } = await query({
    query: GetMoodsQueryDocument,
  });

  return (
    <>
      {data.getMoods?.map((entry) => (
        <MoodListItem {...(entry as MoodListEntry)} key={entry?.date} />
      ))}
    </>
  );
}

type MoodListEntry = Omit<MoodEntry, "user_id">;

const MoodListItem = ({ date, mood }: MoodListEntry) => {
  const emoji = moodEmojis[mood as keyof typeof moodEmojis];
  const readableDate = new Date(Number(date)).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p>
      {emoji} - {readableDate}
    </p>
  );
};
