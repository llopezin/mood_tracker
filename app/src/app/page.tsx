import MoodSelector from "@/components/organisms/moodSelector/moodSelector";

export interface PostMoodState {
  message: string;
  success: boolean;
}

export default function Home() {
  return (
    <main>
      <h1>What is your mood today?</h1>
      <MoodSelector />
    </main>
  );
}
