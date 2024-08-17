import MoodList from "@/components/molecules/moodList";
import React, { Suspense } from "react";

//TO DO - Error boundries

export default function Page() {
  return (
    <>
      <h1>Past moods</h1>
      <Suspense fallback="Loading...">
        <MoodList />
      </Suspense>
    </>
  );
}
