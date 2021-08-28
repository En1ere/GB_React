import { Switch } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";
import styles from "./header.module.scss";
import { Menu } from "./menu";
import classNames from "classnames";

export function Header() {
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
    </header>
  );
}
