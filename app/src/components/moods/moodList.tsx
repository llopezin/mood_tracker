import { GetMoodsQueryDocument } from "@/generated/graphql";
import { query } from "@/apollo/apollo";
import { MoodListEntry, moodEmojis } from "@/types/mood";

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

const MoodListItem = ({ date, mood }: MoodListEntry) => {
  const emoji = moodEmojis.get(mood);
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
