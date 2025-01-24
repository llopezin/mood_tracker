import MoodSelector from "@/components/moodSelector/moodSelector";

export interface PostMoodState {
  message: string;
  success: boolean;
}

export default function Home() {
  return (
    <>
      <h1>What is your mood today?</h1>
      <MoodSelector />
    </>
  );
}
