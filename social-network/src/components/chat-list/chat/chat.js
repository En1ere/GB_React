import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
// import classnames from "classnames";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { removeConversationById } from "../../../store/conversations";
import styles from "./chat.module.scss";

function ChatView({ title, selected, handleListItemClick }) {
  const messages = useSelector((state) => {
    return state.messages.messages[title] || [];
  });
  const dispatch = useDispatch();
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
        <CloseIcon
          onClick={() => dispatch(removeConversationById(title))}
          className={styles.iconClose}
        />
      </ListItemIcon>
    </ListItem>
  );
}

export const Chat = memo(ChatView);
