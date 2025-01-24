import { MoodEntry } from "@/generated/graphql";

type Mood = 1 | 2 | 3 | 4 | 5;
type MoodMap = Map<Mood, string>;

const moodEmojis: MoodMap = new Map([
  [1, "😞"],
  [2, "😕"],
  [3, "😌"],
  [4, "😊"],
  [5, "😍"],
]);

const moodNames: MoodMap = new Map([
  [1, "very sad"],
  [2, "sad"],
  [3, "content"],
  [4, "happy"],
  [5, "very happy"],
]);

type MoodListEntry = Omit<MoodEntry, "user_id" | "mood"> & { mood: Mood };

export { moodEmojis, moodNames, type MoodListEntry, type Mood };
