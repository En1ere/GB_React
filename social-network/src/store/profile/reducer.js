import { TOGGLE_NAME_VISIBLE } from "./types";

const initialState = {
  nameVisible: true,
  user: {
    id: "123",
    firstName: "John Doe",
  },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAME_VISIBLE:
      return {
        ...state,
        nameVisible: !state.nameVisible,
      };
    default:
      return state;
  }
};
