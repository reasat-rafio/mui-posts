import React, { useEffect, useRef, useState } from "react";
import { useCtx } from "./Context/GlobalContext";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import MakeStyles from "./MakeStyles";

const PostGrid = () => {
  const {
    Card_root,
    Card_title,
    Background,
    GridStyle,
    Card_margin,
  } = MakeStyles();
  const { data, getPosts } = useCtx();
  const theme = JSON.parse(localStorage.getItem("dark"));

  const UserPost = (id) => {
    window.location.pathname = `/post/${id}`;
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Paper elevation={0} className={GridStyle}>
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        container
        spacing={2}
      >
        {data &&
          data.map(({ userId, id, title, body }) => (
            <Grid item sm={6} md={4} xs={12}>
              <Paper>
                <Card
                  style={{ backgroundColor: `${!theme ? "#1A2421" : "white"}` }}
                  color="secondary"
                  className={Card_root}
                >
                  <CardContent>
                    <Typography variant="subtitle2">{title}</Typography>
                    <br />
                    <Typography variant="body2">UserID: {id}</Typography>
                    <br />
                    <Typography>Post:</Typography>
                    <Typography className={Card_margin} noWrap variant="body1">
                      {body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => UserPost(id)}
                      variant="outlined"
                      color="primary"
                      size="small"
                    >
                      See More
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default PostGrid;
