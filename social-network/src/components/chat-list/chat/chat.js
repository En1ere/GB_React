import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { memo } from "react";
import { useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./chat.module.scss";

function ChatView({ title, selected, handleListItemClick }) {
  const messages = useSelector((state) => {
    console.log("update");
    return state.messages.messages[title];
  });
  const lastMessage = messages[messages.length - 1];
  
  return (
    <ListItem
      button={true}
      selected={selected}
      onClick={handleListItemClick}
      className={styles.chatItem}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>

      <div className={styles.description}>
        <ListItemText>
          <p className={styles.title}>{title}</p>
        </ListItemText>

        {lastMessage && (
          <ListItemText className={styles.text}>
            {`${lastMessage.author}: ${lastMessage.message}`}
          </ListItemText>
        )}
        <ListItemText>
          <p className={styles.date}>12.08.2021</p>
        </ListItemText>
      </div>
      <ListItemIcon className={styles.iconClose}>
        <CloseIcon className={styles.iconClose} />
      </ListItemIcon>
    </ListItem>
  );
}

export const Chat = memo(ChatView);
