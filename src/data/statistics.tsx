import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import type { statistic } from "../Types/statisticType";
export const statistics: statistic[] = [
  {
    id: Math.random(),
    title: "Revanue",
    price: "2,415",
    compare: "-11.4",
    icon: (
      <ArrowDownwardIcon sx={{ height: "30px", width: "30px" }} color="error" />
    ),
    description: "compared to last mounth",
  },
  {
    id: Math.random(),
    title: "Sales",
    price: "4,415",
    compare: "-1.4",
    icon: (
      <ArrowDownwardIcon sx={{ height: "30px", width: "30px" }} color="error" />
    ),
    description: "compared to last mounth",
  },
  {
    id: Math.random(),
    title: "Cost",
    price: "2,225",
    compare: "+2.4",
    icon: (
      <ArrowUpwardIcon sx={{ height: "30px", width: "30px" }} color="success" />
    ),
    description: "compared to last mounth",
  },
];
