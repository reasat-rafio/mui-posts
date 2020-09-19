import React, { useState } from "react";

// Icons
import GroupIcon from "@material-ui/icons/Group";
import PostAddIcon from "@material-ui/icons/PostAdd";

import {
  AppBar,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";

import MakeStyles from "./MakeStyles";
import { useCtx } from "./Context/GlobalContext";

const Header = () => {
  const { themeFunction } = useCtx();
  const { marginStyle, align } = MakeStyles();

  const [theme, setTheme] = useState(false);

  const onChange = () => {
    setTheme((prevTheme) => !prevTheme);
    themeFunction(theme);
  };

  return (
    <AppBar color="primary" position="static" className={marginStyle}>
      <Toolbar className={align}>
        <IconButton onClick={() => (window.location.pathname = "/")}>
          <PostAddIcon />
        </IconButton>
        <Typography variant="h6">Random Posts</Typography>
        <Switch
          checked={theme}
          onChange={onChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
