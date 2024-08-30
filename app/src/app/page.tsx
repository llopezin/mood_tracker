import { MoodButton } from "@/components/atoms/moodButton";

//TO DO - create button atom
export default function Home() {
  return (
    <main>
      <h1>What is your mood today?</h1>
      <div className="card moods">
        <MoodButton mood={1}>very sad</MoodButton>
        <MoodButton mood={2}>sad</MoodButton>
        <MoodButton mood={3}>content</MoodButton>
        <MoodButton mood={4}>happy</MoodButton>
        <MoodButton mood={5}>very happy</MoodButton>
      </div>
    </main>
  );
}
