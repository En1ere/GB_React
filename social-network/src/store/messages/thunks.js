import { clearMessageValue } from "../conversations";
import { UPDATED_MESSAGES } from "../types";
import { sendMessage, editMessage } from "./actions";
import { GET_MESSAGES } from "./types";

export const sendMessageWithThunk =
  (message, roomId) =>
  async (dispatch, _, { sendMessageApi }) => {
    await sendMessageApi(message, roomId);
    try {
      await sendMessageApi(roomId, message);
      dispatch(sendMessage(message, roomId));
      dispatch(clearMessageValue(roomId));
    } catch (e) {
      console.log("error", e);
    }
  };

export const editMessageThunk =
  (messageValue, roomId, updateMessageId) => (dispatch) => {
    dispatch(editMessage(messageValue, roomId, updateMessageId));
    dispatch({ type: UPDATED_MESSAGES });
    dispatch(clearMessageValue(roomId));
  };

export const getMessagesFB =
  () =>
  (dispatch, _, { getMessaagesApi }) => {
    getMessaagesApi().then((snapshot) => {
      const messages = {};

      snapshot.forEach((snap) => {
        messages[snap.key] = Object.values(snap.val());
      });

      dispatch({ type: GET_MESSAGES, payload: messages });
    });
  };
