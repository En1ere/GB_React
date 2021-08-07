import { ThemeProvider, createTheme } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
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
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
