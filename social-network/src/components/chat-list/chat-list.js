import "./chat-list.scss";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.light.backgroundColor,
  },
  inline: {
    display: "inline",
  },
}));

export const ChatList = () => {
  const [chats] = useState([
    { name: "Alex", id: "1" },
    { name: "Ann", id: "2" },
    { name: "Bot", id: "3" },
  ]);

  const classes = useStyles();

  return (
    <List className={`${classes.root} chat`}>
      {chats.map((chat, idx) => (
        <ListItem alignItems="flex-start" button key={idx}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={chat.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                ></Typography>
                {chat.id}
              </React.Fragment>
            }
          />
          <Divider variant="inset" component="li" />
        </ListItem>
      ))}
    </List>
  );
};
