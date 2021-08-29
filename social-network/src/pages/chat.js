import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { Layout, ChatList, MessageList, ContentNoChat } from "../components";
import { getConversationsFB } from "../store/conversations";
import { getMessagesFB } from "../store/messages";

export function Chat() {
  const { push } = useHistory();

  useEffect(() => {
    const listenExistChat = ({ code }) => {
      if (code === "Escape") {
        push("/chat");
      }
    };

    document.addEventListener("keydown", listenExistChat);

    return () => {
      document.removeEventListener("keydown", listenExistChat);
    };
  }, [push]);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getConversationsFB());
    dispatch(getMessagesFB());
  }, [dispatch]);

  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <Layout chats={<ChatList />}>
          <Route path="/chat/:roomId">
            <MessageList />
          </Route>

          <Redirect to="/chat" />

          <Route exact={true} path="/chat">
            <ContentNoChat />
          </Route>
        </Layout>
      </Route>
      <Route path="*">
        <h1>такого чата нет</h1>
      </Route>
    </Switch>
  );
}
