import React from "react";
import axios from "axios";

// React Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Material UI
import { Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// Css
import "./App.css";

// context
import { useCtx } from "./components/Context/GlobalContext";
import UserPostPage from "./UserPostPage";
import PrivatePost from "./components/PrivatePost";
import Header from "./components/Header";

function App() {
  const { darkModeTheme, lightTheme, theme } = useCtx();

  return (
    <ThemeProvider theme={theme ? lightTheme : darkModeTheme}>
      <Paper style={{ height: "100vh" }} elevation={0}>
        <Header />
        <Router>
          <Switch>
            <Paper elevation={0}>
              <Route exact path="/" component={UserPostPage} />
              <Route exact path="/post/:id" component={PrivatePost} />
            </Paper>
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
