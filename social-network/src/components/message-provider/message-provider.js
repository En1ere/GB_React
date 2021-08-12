import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

export function MessageProvider({ children }) {
  const { roomId } = useParams();

  const [conversations, setConversations] = useState([
    { title: "room1", value: "" },
    { title: "room2", value: "" },
  ]);

  const [messages, setMessages] = useState({
    room1: [],
    room2: [],
  });

  const updateConversations = useCallback(
    (value = "") => {
      setConversations((conversations) =>
        conversations.map((conversation) => {
          return conversation.title === roomId
            ? { ...conversation, value }
            : conversation;
        })
      );
    },
    [roomId]
  );

  const state = useMemo(() => {
    return {
      conversations,
      allMessages: messages,
      messages: messages[roomId] || [],
      value:
        conversations.find((conversation) => conversation.title === roomId)
          ?.value || "",
      hasRoomById: Object.keys(messages).some((room) => room === roomId),
    };
  }, [conversations, messages, roomId]);

  const actions = useMemo(() => {
    return {
      sendMessage: (message) => {
        const newMessage = { ...message, id: new Date() };

        setMessages((messages) => {
          return {
            ...messages,
            [roomId]: [...(messages[roomId] || []), newMessage],
          };
        });

        updateConversations();
      },
      handleChangeValue: (e) => {
        const { value } = e.target;

        updateConversations(value);
      },
    };
  }, [roomId, updateConversations]);

  useEffect(() => {
    let timerId = null;
    if (messages[roomId]) {
      const lastMessage = messages[roomId][messages[roomId].length - 1] || "";

      if (lastMessage?.author === "User") {
        timerId = setTimeout(
          () =>
            actions.sendMessage({
              message: `Hello from bot to room - ${roomId}`,
              author: "Bot",
            }),
          1000
        );
      }
    }
    return () => clearInterval(timerId);
  }, [messages, roomId, actions]);

  return children([state, actions]);
}
