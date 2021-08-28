import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

const menu = [
  { to: "/", name: "Main" },
  { to: "/chat", name: "Chats" },
  { to: "/profile", name: "Profile" },
  { to: "/gists", name: "Gist" },
];

export function Menu() {
  return (
    <div>
      <ul className={styles.menu}>
        {menu.map((item) => (
          <li key={item.name}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
