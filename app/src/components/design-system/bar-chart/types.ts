import { XAxisProps, YAxisProps } from "recharts";
import { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";

export default interface BarChartProps {
  data: CategoricalChartProps["data"];
  XAxisConfig?: XAxisProps;
  YAxisConfig?: YAxisProps;
  yTickMap?: Map<any | number, string>;
  config?: BarChartConfig;
  dataKey: string;
}

export interface BarChartConfig {
  defaultMargins: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  width: number;
  height: number;
  barColor: string;
}
