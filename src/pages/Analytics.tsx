import Grid from "@mui/material/Grid";
import { Paper, Typography, Divider } from "@mui/material";
import StatisticsBox from "../components/StatisticsBox";
import SaleStatisticsBox from "../components/SaleStatisticsBox";
import LineChart from "../components/LineChart";
import SalesChart from "../components/SalesChart";
import PageLayout from "../components/PageLayout";
import { useAppSelector } from "../Redux/hooks";
import {
  selectSaleStatistics,
  selectStatistics,
  selectUserChart,
} from "../Redux/selectors";
import type { statistic } from "../Types/statisticType";
import type { saleStatisticType } from "../Types/saleStatisticsBox";

export default function Analytics() {
  const statistics = useAppSelector(selectStatistics);
  const saleStatistics = useAppSelector(selectSaleStatistics);
  const userChart = useAppSelector(selectUserChart);

  return (
    <PageLayout
      title="Analytics Dashboard"
      description="Track performance metrics and uncover trends across the business."
    >
      <Grid
        container
        spacing={4}
        sx={{ flexWrap: "wrap", alignItems: "center" }}
      >
        {statistics.map((item: statistic) => (
          <Grid key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <StatisticsBox
              id={item.id}
              title={item.title}
              price={item.price}
              compare={item.compare}
              icon={item.icon}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, xl: 7 }}>
          <Paper
            elevation={0}
            sx={{
              border: "2px solid var(--border-color)",
              borderRadius: "20px",
              p: 3,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              fontFamily="var(--font-family)"
              fontWeight={600}
            >
              User Growth
            </Typography>
            <Typography
              color="text.secondary"
              fontFamily="var(--font-family)"
              mb={3}
            >
              Monthly active vs. new user acquisition.
            </Typography>
            <LineChart
              Mounth={userChart.Mounth}
              ActiveUsers={userChart.ActiveUsers}
              NewUers={userChart.NewUers}
              height={400}
            />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, xl: 5 }}>
          <Paper
            elevation={0}
            sx={{
              border: "2px solid var(--border-color)",
              borderRadius: "20px",
              p: 3,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              fontFamily="var(--font-family)"
              fontWeight={600}
            >
              Key Sales Metrics
            </Typography>
            <Typography
              color="text.secondary"
              fontFamily="var(--font-family)"
              mb={3}
            >
              Quick snapshot of the most important sales KPIs.
            </Typography>

            {saleStatistics.map((item: saleStatisticType) => (
              <SaleStatisticsBox
                key={item.id}
                id={item.id}
                Title={item.Title}
                PeriodTime={item.PeriodTime}
                Amount={item.Amount}
                Comparison={item.Comparison}
                Time={item.Time}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>

      <Paper
        elevation={0}
        sx={{
          border: "2px solid var(--border-color)",
          borderRadius: "20px",
          p: 3,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          fontFamily="var(--font-family)"
          fontWeight={600}
          mb={1}
        >
          Revenue By Channel
        </Typography>
        <Typography
          color="text.secondary"
          fontFamily="var(--font-family)"
          mb={3}
        >
          Comparative performance of key revenue channels.
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <SalesChart />
      </Paper>
    </PageLayout>
  );
}
