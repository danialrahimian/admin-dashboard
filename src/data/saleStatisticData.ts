import type { saleStatisticType } from "../Types/saleStatisticsBox";
export const saleStatisticData: saleStatisticType[] = [
  {
    id: 1,
    Title: "Income",
    PeriodTime: "Monthly",
    Amount: 37500,
    Comparison: "+14",
    Time: "Since last month",
  },
  {
    id: 2,
    Title: "Visitors",
    PeriodTime: "Annual",
    Amount: 150.121,
    Comparison: "-12",
    Time: "Since last month",
  },
  {
    id: 3,
    Title: "Completed Orders",
    PeriodTime: "Weekly",
    Amount: 12.432,
    Comparison: "+24",
    Time: "Since last month",
  },
  {
    id: 4,
    Title: "Pending Orders",
    Amount: 22,
    Comparison: "+6",
    Time: "Since last month",
  },
];
