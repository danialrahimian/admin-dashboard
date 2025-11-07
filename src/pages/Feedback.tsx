import Grid from "@mui/material/Grid";
import {
  Chip,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import { useAppSelector } from "../Redux/hooks";
import { selectTransactions, selectUsers } from "../Redux/selectors";

const SENTIMENT_ICONS = [
  <ThumbUpAltOutlinedIcon color="success" />,
  <SentimentNeutralOutlinedIcon color="warning" />,
  <ThumbDownAltOutlinedIcon color="error" />,
];

export default function Feedback() {
  const transactions = useAppSelector(selectTransactions);
  const users = useAppSelector(selectUsers);

  const feedbackItems = transactions.slice(0, 5).map((transaction, index) => ({
    id: transaction.id,
    name: transaction.name,
    message: `Order update: ${transaction.status.text}`,
    sentiment: index % SENTIMENT_ICONS.length,
    score: Math.max(40, 100 - index * 12),
  }));

  const satisfactionScore = Math.round(
    feedbackItems.reduce((total, item) => total + item.score, 0) /
      (feedbackItems.length || 1)
  );

  return (
    <PageLayout
      title="Customer Feedback"
      description="Monitor customer sentiment to identify opportunities for improvement."
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
              Satisfaction Overview
            </Typography>
            <Typography
              fontFamily="var(--font-family)"
              color="text.secondary"
              mt={1}
            >
              Average sentiment score aggregated from recent customer touch
              points.
            </Typography>
            <Stack spacing={3} mt={3}>
              <Stack direction="row" justifyContent="space-between">
                <Typography fontFamily="var(--font-family)">
                  Satisfaction Score
                </Typography>
                <Chip
                  label={`${satisfactionScore}%`}
                  color={satisfactionScore > 70 ? "success" : "warning"}
                />
              </Stack>
              <LinearProgress variant="determinate" value={satisfactionScore} />
              <Typography
                fontFamily="var(--font-family)"
                color="text.secondary"
              >
                Goal: Maintain a minimum score of 75% weekly.
              </Typography>
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
              Top Feedback
            </Typography>
            <Typography
              fontFamily="var(--font-family)"
              color="text.secondary"
              mt={1}
            >
              Recent highlights from customers engaging with your team.
            </Typography>
            <Divider sx={{ my: 2 }} />
            {feedbackItems.length === 0 ? (
              <EmptyState
                title="No feedback yet"
                description="Feedback will appear here after customer interactions."
              />
            ) : (
              <List disablePadding>
                {feedbackItems.map((feedback) => (
                  <ListItem
                    key={feedback.id}
                    sx={{
                      borderBottom: "1px solid var(--border-color)",
                      "&:last-of-type": { borderBottom: "none" },
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <Stack mr={2}>{SENTIMENT_ICONS[feedback.sentiment]}</Stack>
                    <ListItemText
                      primaryTypographyProps={{
                        fontFamily: "var(--font-family)",
                        fontWeight: 600,
                      }}
                      secondaryTypographyProps={{
                        fontFamily: "var(--font-family)",
                        color: "text.secondary",
                      }}
                      primary={feedback.name}
                      secondary={feedback.message}
                    />
                    <Chip label={`${feedback.score}%`} color="primary" />
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
          Accounts Requiring Follow-up
        </Typography>
        <Typography
          fontFamily="var(--font-family)"
          color="text.secondary"
          mt={1}
        >
          Based on account status, these customers may benefit from additional
          outreach.
        </Typography>
        <Divider sx={{ my: 2 }} />
        {!users.length ? (
          <EmptyState
            title="No customers on file"
            description="Create user profiles to begin tracking feedback."
          />
        ) : (
          <Grid container spacing={2}>
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
                    mt={1}
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
