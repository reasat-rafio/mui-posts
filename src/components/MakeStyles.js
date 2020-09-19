import { green, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  marginStyle: {
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    width: "70%",
  },

  GridStyle: {
    margin: "20px auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    width: "65%",
  },

  align: {
    margin: "auto",
  },
  Card_root: {
    maxHeight: 400,
    minHeight: 200,
    [theme.breakpoints.down("sm")]: {
      height: 230,
    },
  },
  Card_title: {
    fontSize: 14,
  },
  Card_margin: {
    marginBottom: 12,
  },
  Background: {},
}));
