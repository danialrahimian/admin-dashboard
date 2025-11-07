import Grid from "@mui/material/Grid";
import { Container, Button } from "@mui/material";
import StatisticsBox from "../components/StatisticsBox";
import type { statistic } from "../Types/statisticType";
import LineChart from "../components/LineChart";
import UserList from "../components/UserList";
import LastTransactions from "../components/LastTransactions";
import { useAppSelector } from "../Redux/hooks";
import { selectStatistics, selectUserChart } from "../Redux/selectors";
import type { userChartType } from "../Types/userChartTypes";
export default function Home() {
  const statistics = useAppSelector(selectStatistics);
  const userChartData: userChartType = useAppSelector(selectUserChart);

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
          Overview
        </Button>
        <Grid
          sx={{ mt: 2 }}
          container
          direction={"row"}
          spacing={5}
          justifyContent={"center"}
        >
          {statistics.map((statistic: statistic) => {
            return (
              <StatisticsBox
                id={statistic.id}
                key={statistic.title}
                title={statistic.title}
                price={statistic.price}
                compare={statistic.compare}
                icon={statistic.icon}
                description={statistic.description}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid
        mt={10}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Button
          sx={{
            fontFamily: " var(--font-family)",
            textAlign: "center",
            border: "2px solid var(--border-color)",
            width: "300px",
            padding: "10px",
            borderRadius: "20px",
            mb: "20px",
          }}
        >
          User Chart
        </Button>

        <LineChart
          Mounth={userChartData.Mounth}
          ActiveUsers={userChartData.ActiveUsers}
          NewUers={userChartData.NewUers}
          height={400}
        />
      </Grid>
      <Grid
        mt={10}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Button
          sx={{
            fontFamily: " var(--font-family)",
            textAlign: "center",
            border: "2px solid var(--border-color)",
            width: "300px",
            padding: "10px",
            borderRadius: "20px",
            mb: "20px",
          }}
        >
          Transactions
        </Button>

        <LastTransactions />
        <UserList />
      </Grid>
    </Container>
  );
}
