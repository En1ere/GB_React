import { Input, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useEffect, useRef, useCallback } from "react";
import { Message } from "./message";
import styles from "./message-list.module.scss";

export const MessageList = ({
  messages,
  value,
  sendMessage,
  handleChangeValue,
}) => {
  const ref = useRef();

  const handleSendMessage = () => {
    if (value) {
      sendMessage({ author: "User", message: value });
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      handleSendMessage();
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  useEffect(() => {
    handleScrollBottom();
  }, [handleScrollBottom]);

  return (
    <div>
      <div ref={ref} className={styles.messages}>
        {messages.map((message, id) => (
          <Message key={id} {...message} />
        ))}
      </div>

      <Input
        className={styles.input}
        value={value}
        onChange={handleChangeValue}
        onKeyPress={handlePressInput}
        fullWidth={true}
        placeholder="Введите сообщение..."
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send onClick={handleSendMessage} className={styles.icon} />
            )}
          </InputAdornment>
        }
      />
    </div>
  );
};
