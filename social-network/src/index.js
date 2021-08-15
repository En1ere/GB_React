import { createTheme } from "@material-ui/core";
import { Header, Footer } from "./components";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { DefaultThemeProvider } from "./components/theme-context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Chat, MainPage, Profile } from "./pages";
import { store } from "./store";
import "./style/global.scss";

const themes = {
  dark: createTheme({
    backgroundColor: "#493d39",
    textColor: "#f7e5dc",
  }),
  light: createTheme({
    backgroundColor: "#f7e5dc",
    textColor: "#000",
  }),
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DefaultThemeProvider themes={themes} initialTheme="light">
          <div className="wrapper">
            <Header />
            <Switch>
              <Route path="/chat" component={() => <Chat />}></Route>
              <Route path="/profile" component={() => <Profile />}></Route>
              <Route path="/" component={() => <MainPage />}></Route>
              <Route path="*" component={() => <h1>Error 404</h1>}></Route>
            </Switch>
            <Footer />
          </div>
        </DefaultThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
