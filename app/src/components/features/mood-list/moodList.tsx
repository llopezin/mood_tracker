import { GetMoodsQueryDocument } from "@/generated/graphql";
import { query } from "@/apollo/apollo";
import { MoodListEntry } from "@/types/mood";
import MoodListItem from "./moodListItem";

export default async function MoodList() {
  const { data } = await query({
    query: GetMoodsQueryDocument,
  });

  data.getMoods?.map((entry) => ({ mood: entry?.mood, date: entry?.date }));

  return (
    <>
      {data.getMoods?.map((entry) => (
        <MoodListItem {...(entry as MoodListEntry)} key={entry?.date} />
      ))}
    </>
  );
}
