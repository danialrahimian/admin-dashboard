import type {
  mounthType,
  activeUsersType,
  newUersType,
} from "../Types/userChartTypes";
export const userChartData: {
  Mounth: mounthType;
  ActiveUsers: activeUsersType;
  NewUers: newUersType;
} = {
  Mounth: [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  ActiveUsers: [
    3000, 4000, 2000, 2780, 1890, 2390, 3490, 2200, 1323, 2590, 5600,
  ],
  NewUers: [2400, 1398, 4800, 3908, 4800, 3800, 4300, 1200, 400, 4000, 10000],
};
