"use client";

import BarChartProps from "./types";
import barChartConfig from "./barChart.config";
import {
  Bar,
  XAxis,
  YAxis,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
} from "recharts";

export function BarChart({
  data,
  YAxisConfig,
  XAxisConfig,
  yTickMap,
  config = barChartConfig,
  dataKey,
}: BarChartProps) {
  const { defaultMargins, width, height, barColor } = config;
  const tickFormatter = (value: any) => yTickMap?.get(value) ?? value;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart
        width={width}
        height={height}
        data={data}
        margin={defaultMargins}
      >
        <YAxis {...YAxisConfig} tickFormatter={tickFormatter} />
        <XAxis {...XAxisConfig} />
        <Bar isAnimationActive={false} dataKey={dataKey} fill={barColor} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
