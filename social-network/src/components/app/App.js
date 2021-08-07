import { Grid, makeStyles } from "@material-ui/core";
import { ChatList, MessageList } from "../";
import "./app.scss";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      background: theme.light.backgroundColor,
      color: theme.light.textColor,
    },
  };
});

export function App() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} app`}>
      <header className="header">
        <h1>Welcome</h1>
      </header>
      <main className="main">
        <div className={classes.root}>
          <Grid container={true} spacing={3}>
            <Grid item={true} xs={3}>
              <ChatList />
            </Grid>
            <Grid item={true} xs={8}>
              <MessageList />
            </Grid>
          </Grid>
        </div>
      </main>
      <footer className="footer">&copy; 2021</footer>
    </div>
  );
}
