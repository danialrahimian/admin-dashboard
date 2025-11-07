import Grid from "@mui/material/Grid";
import { Container, Button } from "@mui/material";
import SaleStatisticsBox from "../components/SaleStatisticsBox";
import SalesChart from "../components/SalesChart";
import type { saleStatisticType } from "../Types/saleStatisticsBox";
import { useAppSelector } from "../Redux/hooks";
import { selectSaleStatistics } from "../Redux/selectors";

export default function Sales() {
  const saleStatisticData = useAppSelector(selectSaleStatistics);

  return (
    <Container>
      <Grid
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={5}
      >
        <Button
          sx={{
            fontFamily: " var(--font-family)",
            textAlign: "center",
            border: "2px solid var(--border-color)",
            width: "300px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          Sale Statistics
        </Button>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        spacing={5}
        mt={2}
        display={"flex"}
      >
        {saleStatisticData.map((saleStatistic: saleStatisticType) => {
          return (
            <SaleStatisticsBox
              id={saleStatistic.id}
              key={saleStatistic.Title}
              Title={saleStatistic.Title}
              PeriodTime={saleStatistic.PeriodTime}
              Amount={saleStatistic.Amount}
              Comparison={saleStatistic.Comparison}
              Time={saleStatistic.Time}
            ></SaleStatisticsBox>
          );
        })}
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={10}
      >
        <Button
          sx={{
            fontFamily: " var(--font-family)",
            textAlign: "center",
            border: "2px solid var(--border-color)",
            width: "300px",
            padding: "10px",
            borderRadius: "20px",
            mb: 2,
          }}
        >
          Sale Chart
        </Button>

        <SalesChart />
      </Grid>
    </Container>
  );
}

