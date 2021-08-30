import React from "react";
import { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchcontainer: {
    margin: "20px",
    position: "relative",
    paddingLeft: "200px",
    paddingRight: "300px",
  },
  form: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  searchinput: {
    padding: "0 calc(1em + 20px)",
    color: "inherit",
    width: "100%",
  },

  button: {
    width: "83.8px",
  },
}));
export default function UrlShort() {
  const classes = useStyles();
  const UrlData = (e) => setUrl(e.target.value);
  const [Url, setUrl] = useState();
  const [FormUrl, setFormUrl] = useState();

  return (
    <div className="App">
      <div className={classes.searchcontainer}>
        <Paper variant="outlined">
          <form className={classes.form}>
            <InputBase
              className={classes.searchinput}
              onChange={UrlData}
              autoFocus
            />
            <Button
              type="button"
              color="secondary"
              variant="contained"
              onClick={Url}
            >
              Shrink
            </Button>
          </form>
        </Paper>
      </div>
      <div className={classes.contents}>
        <Typography>{Url}</Typography>
      </div>
    </div>
  );
}
