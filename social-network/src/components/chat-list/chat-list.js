import { List } from "@material-ui/core";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Chat } from "./chat";
import styles from "./chat-list.module.scss";

const selector = (state) => {
  return state.conversations.conversations;
};

export const ChatList = memo(() => {
  const { roomId } = useParams();
  const conversations = useSelector(selector);

  return (
    <List component="nav" className={styles.chatList}>
      {conversations.map((chat, index) => {
        return (
          <Link key={index} to={`/chat/${chat.title}`}>
            <Chat title={chat.title} selected={roomId === chat.title} />
          </Link>
        );
      })}
    </List>
  );
});
