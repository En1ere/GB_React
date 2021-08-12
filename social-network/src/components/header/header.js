import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>Welcome</h1>
    </header>
  );
}
