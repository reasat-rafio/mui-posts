import { act } from "react-dom/test-utils";

export default (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "GET_ONE_POSTS":
      return {
        ...state,
        findOneData: action.payload,
        loading: false,
      };
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };
    case "GET_IMGS":
      return {
        ...state,
        img: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
