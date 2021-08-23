import { sendMessage } from "../messages";
import { SEND_MESSAGE } from "../messages/types";

export const botSendMessage = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE && action.payload.message.author === "Me") {
    setTimeout(() => {
      store.dispatch(
        sendMessage(
          { author: "Bot", message: "Hello I am bot!" },
          action.payload.roomId
        )
      );
    }, 1000);
  }

  return next(action);
};
