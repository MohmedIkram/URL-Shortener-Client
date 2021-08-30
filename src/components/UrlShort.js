import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import ParticleBackground from "./ParticleBackground";

/** import from materail ui */
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
  table: {
    width: "100%",
  },
  searchcontainertable: {
    // paddingLeft: "200px",
    // paddingRight: "300px",
  },
}));

function UrlShort() {
  return (
    <div>
      <ParticleBackground />
      <UrlTable />
    </div>
  );
}
function UrlTable() {
  const classes = useStyles();
  const UrlData = (e) => setUrl(e.target.value);
  const [Url, setUrl] = useState();
  const [FormUrl, setFormUrl] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = {
      Url,
    };
    axios
      .post(`https://password-reset-guvi.herokuapp.com/`, myData)
      .then((response) => {
        // return  response;
        localStorage.setItem("auth", JSON.stringify(response.data));
        const shorturl = localStorage.getItem("surl");
      })
      .catch((error) => {
        //return  error;
        history.push(`/`);
      });
  };

  return (
    <div className="App">
      <div className={classes.searchcontainer}>
        <Paper variant="outlined">
          <form className={classes.form}>
            <div className="search-icon">
              <SearchIcon color="secondary" />
            </div>
            <InputBase
              className={classes.searchinput}
              onChange={UrlData}
              autoFocus
            />
            <Button
              type="button"
              color="secondary"
              variant="contained"
              onClick={handleSubmit}
            >
              Shrink
            </Button>
          </form>
        </Paper>
      </div>

      {/* table */}

      <TableContainer
        // component={Paper}
        className={classes.searchcontainertable}
      >
        <Table classLongUrl={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5" component="h2">
                  Long-Url
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5" component="h2">
                  Short-Url
                </Typography>
              </TableCell>
              <TableCell align="right">
                {/* <Typography variant="h5" component="h2">
                  Copy
                </Typography> */}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {Url}
              </TableCell>
              <TableCell align="right">hello</TableCell>
              <TableCell align="right">
                {" "}
                <Button variant="contained" color="secondary">
                  Copy link
                </Button>{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UrlShort;
