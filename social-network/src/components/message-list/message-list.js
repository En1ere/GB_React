import { Input, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useState, useEffect } from "react";
import "./message-list.scss";

export const MessageList = () => {
  const [messages, setMessages] = useState([
    { value: "Hello, I'm Alex", author: "Alex" },
    { value: "Hey", author: "Ann" },
  ]);

  const [value, setValue] = useState("");

  const handleSendMessage = () => {
    if (!value) {
      return;
    }
    setMessages((state) => [...state, { value, author: "Me" }]);
    setValue("");
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      setMessages((state) => [...state, { value, author: "Me" }]);
      setValue("");
    }
  };

  useEffect(() => {
    if (messages[messages.length - 1].author === "Me") {
      setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: "Hello world! I am bot", author: "Bot" },
        ]);
      }, 1500);
    }
  }, [messages]);

  return (
    <div className="messages__list">
      <div className="messages">
        {messages.map((message, id) => (
          <div className="messages__box" key={id}>
            <p className="messages__box-head">{message.author}:</p>
            <p className="messages__box-text">{message.value} </p>
          </div>
        ))}
      </div>

      <Input className="messages__input"
        autoFocus
        multiline
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        fullWidth={true}
        placeholder="Введите сообщение..."
        endAdornment={
          <InputAdornment position="end">
            <Send onClick={handleSendMessage} />
          </InputAdornment>
        }
      />
    </div>
  );
};
