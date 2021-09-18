import { Switch } from "@material-ui/core";
import { useContext } from "react";
import { firebaseApp } from "../../api/firebase";
import { ThemeContext } from "../theme-context";
import { Menu } from "./menu";
import styles from "./header.module.scss";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import classNames from "classnames";

const signOut = () => {
  firebaseApp.auth().signOut();
};

export function Header({ session }) {
  const { theme, changeTheme } = useContext(ThemeContext);

  const isLightTheme = theme.name === "light";

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.headerText}>Welcome</h1>
      </div>
      <div>
        <Menu />
      </div>
      <div className={styles.themes}>
        <Brightness4Icon
          className={classNames(styles.themesIconLight, {
            [styles.themesIconDark]: isLightTheme === false,
          })}
        />
        <Switch
          name="checkedC"
          checked={isLightTheme}
          onChange={() => changeTheme(isLightTheme ? "dark" : "light")}
        />
      </div>
      <div>
        {session?.email && (
          <button style={{ cursor: "pointer" }} item={true} onClick={signOut}>
            Sign Out ({session.email})
          </button>
        )}
      </div>
    </header>
  );
}
