import { List, Paper } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import { useAppSelector } from "../Redux/hooks";
import { selectUsers } from "../Redux/selectors";
import Thread from "../components/Thread";
export default function Mail() {
  const users = useAppSelector(selectUsers);
  const threads = users.slice(0, 6).map((user, index) => ({
    id: user.id,
    author: `${user.firstName} ${user.lastName}`,
    preview: `Quick update on account status – currently marked as ${user.Status}.`,
    unread: index % 2 === 0,
    timestamp: `2025-05-${11 + index}`,
  }));

  return (
    <PageLayout
      title="Inbox"
      description="Manage communication threads and keep track of important updates."
    >
      <Paper
        elevation={0}
        sx={{
          border: "2px solid var(--border-color)",
          borderRadius: "20px",
          p: 3,
        }}
      >
        {threads.length === 0 ? (
          <EmptyState
            title="Inbox is clear"
            description="You're all caught up. New messages will appear here."
            icon={<MailOutlineIcon fontSize="large" color="primary" />}
          />
        ) : (
          <List disablePadding>
            {threads.map((thread) => (
              <Thread key={thread.id} thread={thread} />
            ))}
          </List>
        )}
      </Paper>
    </PageLayout>
  );
}
