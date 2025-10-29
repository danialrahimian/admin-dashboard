import { LineChart } from "@mui/x-charts/LineChart";
import type { BasicLineChart } from "../Types/basicLineChartType";
export default function BasicLineChart({
  ActiveUsers,
  Mounth,
  NewUers,
}: BasicLineChart) {
  return (
    <LineChart
      sx={{
        border: "2px solid var(--border-color)",
        borderRadius: "20px",
        padding: "10px",
        maxWidth: 1000,
        height: 500,
      }}
      xAxis={[{ scaleType: "point", data: Mounth }]}
      series={[
        { data: ActiveUsers, label: "ActiveUsers" },
        { data: NewUers, label: "NewUers" },
      ]}
    />
  );
}
