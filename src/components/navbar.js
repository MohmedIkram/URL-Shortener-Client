import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#ee6123",
  },
  subtitle: {
    lineHeight: "inherit",
    color: "#1779ba",
    textDecoration: "none",
    cursor: "pointer",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Url Shortener
          </Typography>

          <Button
            color="inherit"
            className={classes.subtitle}
            component={Link}
            to="/Login"
          >
            Login
          </Button>
          <Button
            color="inherit"
            className={classes.subtitle}
            component={Link}
            to="/signUp"
          >
            signUp
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
