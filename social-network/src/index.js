import { ThemeProvider, createTheme } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Chat, MainPage } from "./pages";
import "./style/global.scss";

const theme = createTheme({
  dark: {
    backgroundColor: "#493d39",
    textColor: "#f7e5dc",
  },
  light: {
    backgroundColor: "#f7e5dc",
    textColor: "#000",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/chat" component={() => <Chat />}></Route>
          <Route path="/" component={() => <MainPage />}></Route>
          <Route path="*" component={() => <h1>Error 404</h1>}></Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
