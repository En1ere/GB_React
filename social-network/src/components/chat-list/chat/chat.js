import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import styles from "./chat.module.scss";

export function Chat({ title, selected, handleListItemClick, lastMessage }) {
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
        <ListItemText className={styles.text} primary={title} />
        {lastMessage && (
          <ListItemText
            className={styles.text}
            primary={`${lastMessage.author}: ${lastMessage.message}`}
          />
        )}
        <ListItemText className={styles.text} primary="12.30" />
      </div>
    </ListItem>
  );
}
