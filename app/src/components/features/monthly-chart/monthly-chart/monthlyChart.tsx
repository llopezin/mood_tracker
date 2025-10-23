import { query } from "@/apollo/apollo";
import { GetMoodsByMonthQueryDocument } from "@/generated/graphql";
import React from "react";
import { BarChart } from "@/components/design-system/bar-chart/barChart";
import { moodEmojis } from "@/types/mood";
import transformMoodsData from "../utils/transformMoodData";
import FullScreenCenterAbsoluteChild from "@/components/design-system/layouts/FullScreenCenterAbsoluteChild/FullScreenCenterAbsoluteChild";
import MonthlyChartProps from "./types";

export default async function MonthlyChart({ month, year }: MonthlyChartProps) {
  const moodKeys = [...moodEmojis.keys()];
  const firstMood = moodKeys[0] as number;
  const lastMood = moodKeys.at(-1) as number;

  const { data } = await query({
    query: GetMoodsByMonthQueryDocument,
    variables: { month, year },
  });

  if (!data) return null;

  return (
    <FullScreenCenterAbsoluteChild>
      <BarChart
        data={transformMoodsData(data.getMoodsByMonth)}
        dataKey="mood"
        yTickMap={moodEmojis}
        YAxisConfig={{
          ticks: moodKeys,
          tick: { fontSize: 30 },
          domain: [firstMood, lastMood],
        }}
        XAxisConfig={{
          dataKey: "date",
          angle: -45,
          textAnchor: "end",
          height: 100,
        }}
      />
    </FullScreenCenterAbsoluteChild>
  );
}
