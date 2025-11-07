import { LineChart } from "@mui/x-charts";
import type { lineChartPropType } from "../Types/lineChartPropType";
export default function BasicLineChart({
  ActiveUsers,
  Mounth,
  NewUers,
  height,
}: lineChartPropType) {
  return (
    <LineChart
      sx={{
        border: "2px solid var(--border-color)",
        borderRadius: "20px",
        padding: "10px",
        width: "100%",
      }}
      height={height}
      xAxis={[{ scaleType: "point", data: Mounth }]}
      series={[
        { data: ActiveUsers, label: "ActiveUsers" },
        { data: NewUers, label: "NewUers" },
      ]}
    />
  );
}
