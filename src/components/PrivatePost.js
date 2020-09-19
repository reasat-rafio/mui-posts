import { Paper, Typography } from "@material-ui/core";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import { useCtx } from "./Context/GlobalContext";
import MakeStyles from "./MakeStyles";

const PrivatePost = () => {
  // Data from global context
  const { findOneData, getOnePost, theme, comments, img } = useCtx();

  //params query
  const { id } = useParams();

  //   Mui styles
  const { GridStyle } = MakeStyles();

  //
  const ref = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      await getOnePost(id);
    };

    fetchData();
  }, []);

  if (comments.length) {
    const ig = img.splice(Math.floor(Math.random() * 10), comments.length);
    comments.forEach((c, index) => (c.image = ig[index]));
    ref.current = true;
  }

  const { userId, title, body } = findOneData;

  return (
    <div className={GridStyle}>
      <div
        style={{
          backgroundColor: `${theme ? "rgb(238, 238, 238)" : "#1A2421"}`,
        }}
      >
        {!ref.current ? (
          "loading"
        ) : (
          <div elevation={4} style={{ textAlign: "center" }}>
            {" "}
            <Typography>User id: {id}</Typography>
            <br />
            <Typography>Title: {title}</Typography>
            <Typography>{body}</Typography>
            <Comments comments={comments} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivatePost;
