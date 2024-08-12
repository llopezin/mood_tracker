import MoodList from "@/components/moodList";
import React, { Suspense } from "react";

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
