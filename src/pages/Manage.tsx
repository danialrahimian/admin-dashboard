import Grid from "@mui/material/Grid";
import { Checkbox, FormControlLabel, Paper, Stack, Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import { useAppSelector } from "../Redux/hooks";
import {
  selectSaleStatistics,
  selectTransactions,
  selectUsers,
} from "../Redux/selectors";

export default function Manage() {
  const users = useAppSelector(selectUsers);
  const transactions = useAppSelector(selectTransactions);
  const saleStatistics = useAppSelector(selectSaleStatistics);

  const managementTasks = [
    {
      id: "audit-product",
      label: "Review product catalog updates",
      done: false,
    },
    {
      id: "reconcile",
      label: "Reconcile outstanding transactions",
      done: transactions.some((tx) => tx.status.type !== "success"),
    },
    {
      id: "follow-up",
      label: "Follow up with pending customers",
      done: users.filter((user) => user.Status !== "active").length === 0,
    },
  ];

  return (
    <PageLayout
      title="Team Management"
      description="Coordinate tasks across teams and track operational health."
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
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
              Operational Checklist
            </Typography>
            <Typography
              fontFamily="var(--font-family)"
              color="text.secondary"
              mt={1}
            >
              Confirm these items each week to keep operations running smoothly.
            </Typography>
            <Stack mt={2}>
              {managementTasks.map((task) => (
                <FormControlLabel
                  key={task.id}
                  control={<Checkbox defaultChecked={task.done} />}
                  label={
                    <Typography fontFamily="var(--font-family)">
                      {task.label}
                    </Typography>
                  }
                />
              ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
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
            >
              Snapshot
            </Typography>
            <Typography
              fontFamily="var(--font-family)"
              color="text.secondary"
              mt={1}
            >
              Quick overview of team responsibilities and current workload.
            </Typography>
            <Stack spacing={2} mt={3}>
              <SnapshotRow label="Team members" value={users.length} />
              <SnapshotRow
                label="Open transactions"
                value={transactions.filter((tx) => tx.status.type !== "success").length}
              />
              <SnapshotRow
                label="Active initiatives"
                value={saleStatistics.length}
              />
            </Stack>
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
          Notes
        </Typography>
        <Typography
          fontFamily="var(--font-family)"
          color="text.secondary"
          mt={1}
        >
          Assign owners to upcoming projects and flag any blockers.
        </Typography>
        {users.length === 0 ? (
          <EmptyState
            title="Need team members"
            description="Add users to collaborate on management tasks."
          />
        ) : (
          <Grid container spacing={2} mt={1}>
            {users.slice(0, 4).map((user) => (
              <Grid key={user.id} size={{ xs: 12, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    border: "1px solid var(--border-color)",
                    borderRadius: "16px",
                    p: 2,
                  }}
                >
                  <Typography fontFamily="var(--font-family)" fontWeight={600}>
                    {user.firstName} {user.lastName}
                  </Typography>
                  <Typography
                    fontFamily="var(--font-family)"
                    color="text.secondary"
                    mt={0.5}
                  >
                    Status: {user.Status}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </PageLayout>
  );
}

function SnapshotRow({ label, value }: { label: string; value: number }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography fontFamily="var(--font-family)" color="text.secondary">
        {label}
      </Typography>
      <Typography fontFamily="var(--font-family)" fontWeight={600}>
        {value}
      </Typography>
    </Stack>
  );
}


