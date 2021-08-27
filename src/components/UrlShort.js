import React from "react";
import { useState, useEffect } from "react";
import "./UrlShort.css";

import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";
export default function UrlShort() {
  const UrlData = (e) => setUrl(e.target.value);
  const [Url, setUrl] = useState();
  const [FormUrl, setFormUrl] = useState();

  return (
    <div className="App">
      <div className="search-container">
        <Paper variant="outlined">
          <form>
            <InputBase className="search-input" onChange={UrlData} autoFocus />

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
      <div className="contents">
        <Typography>{Url}</Typography>
      </div>
    </div>
  );
}
