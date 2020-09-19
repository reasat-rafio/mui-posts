import React, { useState } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

import { createContext, useContext, useReducer } from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const initialState = {
  data: [],
  findOneData: {},
  loading: true,
  comments: [],
  img: [],
};

export const Ctx = createContext();

// GlobalContext provider
export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   const [data, setData] = useState({});
  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      dispatch({
        type: "GET_POSTS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOnePost(id) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      dispatch({
        type: "GET_ONE_POSTS",
        payload: response.data,
      });

      const commentsRes = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      dispatch({
        type: "GET_COMMENTS",
        payload: commentsRes.data,
      });

      const commentsImg = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      const imgs = commentsImg.data;
      const x = imgs.slice(0, 500);

      dispatch({
        type: "GET_IMGS",
        payload: x,
      });
    } catch (error) {}
  }

  // setDarkTheme function
  const [theme, setTheme] = useState(false);
  const themeFunction = (value) => {
    localStorage.setItem("dark", JSON.stringify(value));
    setTheme(JSON.parse(localStorage.getItem("dark")));
  };

  // MUI darkMode Theme
  const darkModeTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#219897",
      },
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#278ea5",
      },
    },
  });

  return (
    <Ctx.Provider
      value={{
        data: state.data,
        loading: state.loading,
        findOneData: state.findOneData,
        comments: state.comments,
        img: state.img,
        getPosts,
        themeFunction,
        darkModeTheme,
        theme,
        lightTheme,
        getOnePost,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export const useCtx = () => useContext(Ctx);
