import { List, Button } from "@material-ui/core";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Chat } from "./chat";
import { AddContactModal } from "../add-contact-modal";
import styles from "./chat-list.module.scss";

const selector = (state) => {
  return state.conversations.conversations;
};

export const ChatList = memo(() => {
  const { roomId } = useParams();
  const conversations = useSelector(selector);
  const [isOpen, setModal] = useState(false);

  return (
    <div className='chatList__wrapper'>
      <div>
        <List component="nav" className={styles.chatList}>
          {conversations.map((chat, index) => {
            return (
              <Link key={index} to={`/chat/${chat.title}`}>
                <Chat title={chat.title} selected={roomId === chat.title} />
              </Link>
            );
          })}
        </List>
      </div>

      <AddContactModal isOpen={isOpen} onClose={() => setModal(false)} />
      <Button
        variant="contained"
        fullWidth={true}
        onClick={() => setModal(true)}
      >
        Добавить чат
      </Button>
    </div>
  );
});
