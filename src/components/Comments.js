import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Comments = ({ comments }) => {
  const ref = useRef(false);

  if (comments[0].image) {
    ref.current = true;
  }

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">Comments</Typography>
        </AccordionSummary>

        {!ref.current
          ? "loadingggg"
          : comments.map((c) => (
              <div>
                <AccordionDetails>
                  <div style={{ display: "flex", paddingRight: "20px" }}>
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        margin: "auto",
                      }}
                      src={c.image.url}
                      alt="img"
                    />

                    <Typography
                      style={{ textAlign: "initial", marginLeft: "20px" }}
                    >
                      {c.body}
                    </Typography>
                  </div>
                </AccordionDetails>
                <Divider variant="inset" component="div" />
              </div>
            ))}
      </Accordion>
    </>
  );
};

export default Comments;
