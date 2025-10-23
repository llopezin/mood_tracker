import MonthlyChart from "@/components/features/monthly-chart/monthly-chart/monthlyChart";
import MonthSelector from "@/components/features/monthly-chart/month-selector/monthSelector";
import ChartPageParams from "./types";

export default function Page({ searchParams }: ChartPageParams) {
  const date = new Date();
  const month = Number(searchParams.month) || date.getMonth() + 1;
  const year = Number(searchParams.year) || date.getFullYear();

  return (
    <>
      <MonthSelector {...{ month, year }} />
      <MonthlyChart {...{ month, year }} />
    </>
  );
}
