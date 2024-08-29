import { MoodButton } from "@/components/atoms/moodButton";

//TO DO - create button atom
export default function Home() {
  return (
    <>
      <h1>What is your mood today</h1>
      <MoodButton mood={1} />
      <MoodButton mood={2} />
      <MoodButton mood={3} />
      <MoodButton mood={4} />
      <MoodButton mood={5} />
    </>
  );
}
