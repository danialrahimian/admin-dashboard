import Grid from "@mui/material/Grid";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Avatar from "@mui/material/Avatar";
import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import { useAppSelector } from "../Redux/hooks";
import { selectTransactions, selectUsers } from "../Redux/selectors";

export default function Massages() {
  const transactions = useAppSelector(selectTransactions);
  const users = useAppSelector(selectUsers);

  const conversations = transactions.slice(0, 5).map((transaction, index) => ({
    id: transaction.id,
    name: transaction.name,
    snippet: `Status: ${transaction.status.text}`,
    timestamp: `2025-05-${11 + index} 10:${index}0`,
  }));

  const selectedConversation = conversations[0];
  const threadMessages = selectedConversation
    ? [
        {
          id: "initial",
          author: selectedConversation.name,
          body: "Hi team, looking for an update on the latest invoice.",
          timestamp: "10:00 AM",
        },
        {
          id: "reply",
          author: "Support Agent",
          body: "We're reviewing right now - I'll circle back shortly.",
          timestamp: "10:05 AM",
        },
      ]
    : [];

  return (
    <PageLayout
      title="Message Center"
      description="Stay on top of conversations between customers and the support team."
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
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
              Conversations
            </Typography>
            <Typography
              fontFamily="var(--font-family)"
              color="text.secondary"
              mt={1}
            >
              Recent threads are listed below. Select one to view the details.
            </Typography>
            <List sx={{ mt: 2 }}>
              {conversations.length === 0 ? (
                <EmptyState
                  title="No conversations yet"
                  description="Customer conversations will appear as soon as they start."
                  icon={<ChatBubbleOutlineIcon fontSize="large" />}
                />
              ) : (
                conversations.map((conversation) => (
                  <ListItem key={conversation.id} divider disablePadding>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar>
                          {conversation.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primaryTypographyProps={{
                          fontFamily: "var(--font-family)",
                          fontWeight: 600,
                        }}
                        secondaryTypographyProps={{
                          fontFamily: "var(--font-family)",
                          color: "text.secondary",
                        }}
                        primary={conversation.name}
                        secondary={`${conversation.snippet} - ${conversation.timestamp}`}
                      />
                    </ListItemButton>
                  </ListItem>
                ))
              )}
            </List>
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
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {selectedConversation ? (
              <>
                <Stack spacing={1}>
                  <Typography
                    variant="h6"
                    fontFamily="var(--font-family)"
                    fontWeight={600}
                  >
                    {selectedConversation.name}
                  </Typography>
                  <Typography
                    fontFamily="var(--font-family)"
                    color="text.secondary"
                  >
                    {selectedConversation.snippet}
                  </Typography>
                </Stack>
                <Stack spacing={2} flexGrow={1}>
                  {threadMessages.map((message) => (
                    <Paper
                      key={message.id}
                      elevation={0}
                      sx={{
                        border: "1px solid var(--border-color)",
                        borderRadius: "16px",
                        p: 2,
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          fontFamily="var(--font-family)"
                          fontWeight={600}
                        >
                          {message.author}
                        </Typography>
                        <Typography
                          fontFamily="var(--font-family)"
                          color="text.secondary"
                        >
                          {message.timestamp}
                        </Typography>
                      </Stack>
                      <Typography fontFamily="var(--font-family)" mt={1}>
                        {message.body}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
                <Stack spacing={2}>
                  <Typography fontFamily="var(--font-family)" fontWeight={600}>
                    Compose Message
                  </Typography>
                  <TextField
                    multiline
                    minRows={3}
                    placeholder="Type your response..."
                    fullWidth
                  />
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="flex-end"
                  >
                    <Button variant="outlined">Save Draft</Button>
                    <Button
                      variant="contained"
                      endIcon={<SendOutlinedIcon />}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Stack>
              </>
            ) : (
              <EmptyState
                title="Select a conversation"
                description="Choose a thread on the left to view the latest messages."
              />
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
          Team Availability
        </Typography>
        <Typography
          fontFamily="var(--font-family)"
          color="text.secondary"
          mt={1}
        >
          Use availability to route conversations to the right owner.
        </Typography>
        <Grid container spacing={2} mt={1}>
          {users.slice(0, 3).map((user) => (
            <Grid key={user.id} size={{ xs: 12, md: 4 }}>
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
      </Paper>
    </PageLayout>
  );
}






