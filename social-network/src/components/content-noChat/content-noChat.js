import styles from "./content-noChat.module.scss";

export function ContentNoChat() {
  return (
    <div className={styles.contentNoChat}>
      <h1 className={styles.contentNoChatText}>
        Select a chat to start messaging...
      </h1>
    </div>
  );
}
