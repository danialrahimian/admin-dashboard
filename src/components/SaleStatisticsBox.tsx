import { Box, Grid, Typography } from "@mui/material";
import type { saleStatisticType } from "../Types/saleStatisticsBox";
export default function SaleStatisticsBox({
  Title,
  PeriodTime,
  Amount,
  Comparison,
  Time,
}: saleStatisticType) {
  return (
    <Box
      maxWidth={"400px"}
      height={"150px"}
      border={"2px solid var(--border-color)"}
      borderRadius={"10px"}
      padding={"15px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
    >
      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontSize={"20px"} fontFamily={"var(--font-family)"}>
          {Title}
        </Typography>
        {PeriodTime ? (
          <Typography
            bgcolor={"#7CB9E8"}
            fontSize={"15px"}
            fontFamily={"var(--font-family)"}
            padding={"5px 10px"}
            borderRadius={"10px"}
          >
            {PeriodTime}
          </Typography>
        ) : null}
      </Grid>
      <Grid>
        <Typography fontSize={"25px"} fontFamily={"var(--font-family)"}>
          {Amount}
        </Typography>
      </Grid>
      <Grid display={"flex"} alignItems={"center"}>
        <Typography
          padding={"3px 6px"}
          fontSize={"15px"}
          bgcolor={"#7CB9E8"}
          borderRadius={"10px"}
          fontFamily={"var(--font-family)"}
          mr={2}
        >
          {Comparison}%
        </Typography>
        <Typography
          color="#71776e"
          fontSize={"15px"}
          fontFamily={"var(--font-family)"}
        >
          {Time}
        </Typography>
      </Grid>
    </Box>
  );
}
