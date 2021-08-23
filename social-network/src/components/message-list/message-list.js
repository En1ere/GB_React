import { Input, InputAdornment } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useEffect, useRef, useCallback } from "react";
import { Message } from "./message";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleChangeMessageValue } from "../../store/conversations";
import { sendMessageWithThunk, editMessageThunk } from "../../store/messages";
import styles from "./message-list.module.scss";

export const MessageList = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector((state) => {
    return state.messages.messages[roomId] || [];
  });
  const updateMessageId = useSelector((state) => {
    return state.conversations.updateMessageId;
  });
  const value = useSelector((state) => {
    return (
      state.conversations.conversations.find(
        (conversation) => conversation.title === roomId
      )?.value || ""
    );
  });

  const ref = useRef();

  const handleSendMessage = () => {
    if (value) {
      if (updateMessageId) {
        dispatch(editMessageThunk(value, roomId, updateMessageId));
        return;
      }
      dispatch(sendMessageWithThunk({ author: "Me", message: value }, roomId));
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
          <Message key={id} message={message} />
        ))}
      </div>

      <Input
        className={styles.input}
        value={value}
        onChange={(e) =>
          dispatch(handleChangeMessageValue(e.target.value, roomId))
        }
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
