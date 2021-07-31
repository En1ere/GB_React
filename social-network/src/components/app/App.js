import { useState, useEffect } from "react";
import { Message } from "../message/Message";
import "./app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function App() {
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

  useEffect(() => {
    if (messages[messages.length - 1].author === "Me") {
      setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: "Hello world! I am bot", author: "Bot" },
        ]);
      }, 2000);
    }
  }, [messages]);

  return (
    <div>
      <header className="header__app">
        <h1>Welcome</h1>
      </header>
      <main>
        <div>
          <Message messages={messages} />
          <div className="message__input">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
