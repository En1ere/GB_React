import { List } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { Chat } from "./chat";
import styles from "./chat-list.module.scss";

export const ChatList = ({ conversations, allMessages }) => {
  const { roomId } = useParams();

  return (
    <List component="nav" className={styles.chatList}>
      {conversations.map((chat, index) => {
        const currentMessages = allMessages[chat.title];

        return (
          <Link key={index} to={`/chat/${chat.title}`}>
            <Chat
              title={chat.title}
              selected={roomId === chat.title}
              lastMessage={currentMessages[currentMessages.length - 1]}
            />
          </Link>
        );
      })}
    </List>
  );
};
