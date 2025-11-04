export type mounthType = string[];
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "jul",
//   "Agu",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
export type activeUsersType = number[];
export type newUersType = number[];

export type userChartType = {
  Mounth: mounthType;
  ActiveUsers: activeUsersType;
  NewUers: newUersType;
};
