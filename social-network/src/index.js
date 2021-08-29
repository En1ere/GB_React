import { createTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { firebaseApp, db } from "./api/firebase";
import { Header, Footer, PublicRoute, PrivateRoute } from "./components";
import { DefaultThemeProvider } from "./components/theme-context";
import { Chat, MainPage, Profile, Gist, Login, SignUp } from "./pages";
import { store, persistore } from "./store";
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

const addConversation = () => {
  db.ref("conversations").child("room2").set({ title: "room2", value: "" });
};

const createMessage = (roomId) => {
  db.ref("messages")
    .child("room2")
    .push({ id: 1, author: "User", message: "some text 2" });
};

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <BrowserRouter>
            <DefaultThemeProvider themes={themes} initialTheme="light">
              <div className="wrapper">
                <button onClick={addConversation}>addConversation</button>
                <button onClick={createMessage}>createMessage</button>
                <Header session={session} />
                <Switch>
                  <PrivateRoute
                    isAuth={session}
                    path="/chat"
                    component={Chat}
                  />
                  <PrivateRoute
                    isAuth={session}
                    path="/profile"
                    component={Profile}
                  />
                  <PrivateRoute
                    isAuth={session}
                    path="/gists"
                    component={Gist}
                  />
                  <PublicRoute
                    isAuth={session}
                    path="/login"
                    component={Login}
                  />
                  <PublicRoute
                    isAuth={session}
                    path="/sign-up"
                    component={SignUp}
                  />
                  <PublicRoute isAuth={session} path="/" component={MainPage} />
                  <Route path="*" component={() => <h1>Error 404</h1>}></Route>
                </Switch>
                <Footer />
              </div>
            </DefaultThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
// PrivateRoute
ReactDOM.render(<App />, document.getElementById("root"));
