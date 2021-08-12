import styles from "./layout.module.scss";

export function Layout({ header, chats, children, footer }) {
  return (
    <div className={styles.body}>
      <div className={styles.header}>{header}</div>

      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{children}</div>
      </div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
}
