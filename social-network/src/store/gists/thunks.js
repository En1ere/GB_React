import debounce from "lodash.debounce";
import {
  gistsStart,
  gistsSuccess,
  gistsError,
  searchGistsStart,
  searchGistsSuccess,
  searchGistsError,
} from "./actions";

export const getGists = (page = 1) => {
  return async (dispatch, _, api) => {
    try {
      dispatch(gistsStart());

      const { data } = await api.getGistsApi(page);

      dispatch(gistsSuccess(data));
    } catch (e) {
      dispatch(gistsError(e));
    }
  };
};

export const searchGistsByUserName = (name, isCurrentQuery) => {
  return debounce(async (dispatch, _, api) => {
    try {
      dispatch(searchGistsStart());

      const { data } = await api.searchGistsByUserNameApi(name);
      if (isCurrentQuery) {
        dispatch(searchGistsSuccess(data));
      }
    } catch (e) {
      dispatch(searchGistsError(e));
    }
  }, 500);
};
