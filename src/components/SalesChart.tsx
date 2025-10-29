import { BarChart } from "@mui/x-charts/BarChart";
import { salesChartData } from "../data/salesChartData";

export default function SalesChart() {
  return (
    <BarChart
      dataset={salesChartData}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "Income", label: "Income" },
        { dataKey: "Visitors", label: "Visitors" },
        {
          dataKey: "CompletedOrders",
          label: "Completed Orders",
        },
        { dataKey: "PendingOrders", label: "Pending Orders" },
      ]}
      sx={{
        border: "2px solid var(--border-color)",
        borderRadius: "20px",
        padding: "10px",
        maxWidth: 1000,
        height: 500,
      }}
    />
  );
}
