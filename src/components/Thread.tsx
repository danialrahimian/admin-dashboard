import {
  Avatar,
  Badge,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
type Props = {
  thread: {
    id: number;
    author: string;
    preview: string;
    unread: boolean;
    timestamp: string;
  };
};
import StarBorderIcon from "@mui/icons-material/StarBorder";
export default function Thread({ thread }: Props) {
  return (
    <ListItem
      key={thread.id}
      divider
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
      secondaryAction={
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography fontFamily="var(--font-family)" color="text.secondary">
            {thread.timestamp}
          </Typography>
          <IconButton edge="end" aria-label="mark-important">
            <StarBorderIcon />
          </IconButton>
        </Stack>
      }
    >
      <ListItemAvatar>
        <Badge
          color="primary"
          variant={thread.unread ? "dot" : "standard"}
          overlap="circular"
        >
          <Avatar>
            {thread.author
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </Avatar>
        </Badge>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{
          fontFamily: "var(--font-family)",
          fontWeight: thread.unread ? 600 : 500,
        }}
        secondaryTypographyProps={{
          fontFamily: "var(--font-family)",
          color: "text.secondary",
        }}
        primary={thread.author}
        secondary={thread.preview}
      />
    </ListItem>
  );
}
