import { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../Redux/hooks";
import { selectUsers } from "../Redux/selectors";

export default function UserList() {
  const users = useAppSelector(selectUsers).slice(0, 5);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        border: "2px solid var(--border-color)",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        borderBottom="2px solid var(--border-color)"
        paddingBottom="10px"
        fontFamily="var(--font-family)"
      >
        New Join Members
      </Typography>
      {users.map((user, index) => (
        <Fragment key={user.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
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
              primary={`${user.firstName} ${user.lastName}`}
              secondary={`Status: ${user.Status} - Age: ${user.Age}`}
            />
          </ListItem>
          {index < users.length - 1 ? (
            <Divider variant="inset" component="li" />
          ) : null}
        </Fragment>
      ))}
      {users.length === 0 ? (
        <Typography
          textAlign="center"
          padding="16px"
          fontFamily="var(--font-family)"
          color="text.secondary"
        >
          No recent members found.
        </Typography>
      ) : null}
    </List>
  );
}
