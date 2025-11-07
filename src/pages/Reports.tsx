import Grid from "@mui/material/Grid";
import { Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import { useAppSelector } from "../Redux/hooks";
import {
  selectActiveUsersCount,
  selectCompletedOrders,
  selectPendingAlertCount,
  selectStatistics,
  selectTotalRevenue,
  selectTransactions,
  selectVisitors,
} from "../Redux/selectors";
import type { statistic } from "../Types/statisticType";

const HIGHLIGHT_COLOR = "#7CB9E8";

export default function Reports() {
  const statistics = useAppSelector(selectStatistics);
  const totalRevenue = useAppSelector(selectTotalRevenue);
  const visitors = useAppSelector(selectVisitors);
  const completedOrders = useAppSelector(selectCompletedOrders);
  const pendingAlerts = useAppSelector(selectPendingAlertCount);
  const activeUsers = useAppSelector(selectActiveUsersCount);
  const transactions = useAppSelector(selectTransactions);

  return (
    <PageLayout
      title="Reports"
      description="Generate insights and actionable reports across revenue, engagement, and operations."
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
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
              fontFamily="var(--font-family)"
              fontWeight={600}
            >
              Executive Summary
            </Typography>
            <Stack spacing={2} mt={2}>
              <SummaryRow label="Total Revenue" value={`$${totalRevenue}`} />
              <SummaryRow label="Monthly Visitors" value={visitors} />
              <SummaryRow label="Completed Orders" value={completedOrders} />
              <SummaryRow label="Active Users" value={activeUsers} />
              <SummaryRow
                label="Pending Alerts"
                value={pendingAlerts}
                emphasize
              />
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
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
              fontFamily="var(--font-family)"
              fontWeight={600}
              mb={2}
            >
              KPI Breakdown
            </Typography>
            {statistics.length === 0 ? (
              <EmptyState
                title="No statistics available"
                description="Configure key metrics to populate this view."
              />
            ) : (
              <List disablePadding>
                {statistics.map((item: statistic) => (
                  <ListItem
                    key={item.id}
                    sx={{
                      borderBottom: "1px solid var(--border-color)",
                      "&:last-of-type": { borderBottom: "none" },
                    }}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontFamily: "var(--font-family)",
                      }}
                      secondaryTypographyProps={{
                        fontFamily: "var(--font-family)",
                      }}
                      primary={item.title}
                      secondary={item.description}
                    />
                    <Stack alignItems="flex-end">
                      <Typography
                        fontFamily="var(--font-family)"
                        fontWeight={600}
                      >
                        ${item.price}
                      </Typography>
                      <Chip
                        size="small"
                        label={`${item.compare}%`}
                        sx={{
                          mt: 1,
                          bgcolor: HIGHLIGHT_COLOR,
                          fontFamily: "var(--font-family)",
                        }}
                      />
                    </Stack>
                  </ListItem>
                ))}
              </List>
            )}
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
          fontFamily="var(--font-family)"
          fontWeight={600}
        >
          Recent Activity
        </Typography>
        <Typography
          fontFamily="var(--font-family)"
          color="text.secondary"
          mt={1}
        >
          Snapshot of the latest customer transactions for audit purposes.
        </Typography>
        <Divider sx={{ my: 3 }} />
        {transactions.length === 0 ? (
          <EmptyState
            title="No recent transactions"
            description="New transactions will appear here automatically."
          />
        ) : (
          <Grid container spacing={2}>
            {transactions.slice(0, 4).map((transaction) => (
              <Grid key={transaction.id} size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    border: "1px solid var(--border-color)",
                    borderRadius: "14px",
                    p: 2.5,
                    height: "100%",
                  }}
                >
                  <Stack spacing={1}>
                    <Typography
                      fontFamily="var(--font-family)"
                      fontWeight={600}
                    >
                      {transaction.name}
                    </Typography>
                    <Typography
                      fontFamily="var(--font-family)"
                      color="text.secondary"
                    >
                      {transaction.date}
                    </Typography>
                    <Typography fontFamily="var(--font-family)">
                      Amount: ${transaction.amount.toFixed(2)}
                    </Typography>
                    <Chip
                      label={transaction.status.text}
                      color={
                        transaction.status.type === "success"
                          ? "success"
                          : transaction.status.type === "error"
                            ? "error"
                            : transaction.status.type === "warning"
                              ? "warning"
                              : "info"
                      }
                      sx={{ width: "fit-content" }}
                    />
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </PageLayout>
  );
}

function SummaryRow({
  label,
  value,
  emphasize,
}: {
  label: string;
  value: number | string;
  emphasize?: boolean;
}) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography fontFamily="var(--font-family)" color="text.secondary">
        {label}
      </Typography>
      <Typography
        fontFamily="var(--font-family)"
        fontWeight={emphasize ? 600 : 500}
        color={emphasize ? "error.main" : "text.primary"}
      >
        {value}
      </Typography>
    </Stack>
  );
}



