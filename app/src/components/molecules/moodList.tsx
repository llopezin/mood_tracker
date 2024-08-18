import { GetMoodsQueryDocument, MoodEntry } from "@/generated/graphql";
import { query } from "@/apollo/apollo";
import React from "react";

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
  const entryDate = new Date(Number(date)).toString();
  return (
    <p>
      {mood} - {entryDate}
    </p>
  );
};
