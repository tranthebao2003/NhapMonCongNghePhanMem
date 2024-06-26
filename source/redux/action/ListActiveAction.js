import axios from "axios";
import {
  LIST_ACTIVE_REQUEST,
  LIST_ACTIVE_SUCCESS,
  LIST_ACTIVE_FAILURE
} from "../types/TypesListActive";
import UrlApi from "../UrlApi";
import SetAuthToken from '../../component/SetAuthToken'

// action này để xử lí những api trả về list active

export const ListActiveAction = (urlActive) => {
  
  return async (dispatch) => {
    await SetAuthToken()
    dispatch({ type: LIST_ACTIVE_REQUEST });
    try {
      console.log("chưa call api màn listActiveAction");
      const res = await axios.get(
        `${UrlApi}${urlActive}`
      ); // Replace with your API endpoint
      const listActive = res.data;

      console.log('đã call api màn listActiveAction', listActive);
      dispatch({
        type: LIST_ACTIVE_SUCCESS,
        payload: listActive,
      });
    } catch (error) {
      dispatch({
        type: LIST_ACTIVE_FAILURE,
        payload: error.message,
      });
    }
  };
};
