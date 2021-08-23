import styles from "./layout.module.scss";

export function Layout({ chats, children }) {
  return (
    <div className={styles.body}>
      <div className={styles.header}></div>

      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{children}</div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}
