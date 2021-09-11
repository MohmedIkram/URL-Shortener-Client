import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";

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
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ShareIcon from "@material-ui/icons/Share";

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function UrlShort(props) {
  const classes = useStyles();
  const UrlData = (e) => setFullUrl(e.target.value);
  const [FullUrl, setFullUrl] = useState();
  const [Data, setData] = useState([]);

  // const shortUrl = useParams();
  // const shortUrldata = useParams();
  // console.log(shortUrldata);
  const { shortUrl } = useLocation();

  // console.log(Data.data);

  // send fullurl when button is pressed
  async function handleSubmit(e) {
    // e.preventDefault();
    const myData = {
      FullUrl,
    };
    await axios.post(
      `https://url-shortener-server-guvi.herokuapp.com/url/Fullurl/`,
      myData
    );
  }

  async function Urldata() {
    const response = await axios.get(
      `https://url-shortener-server-guvi.herokuapp.com/url/Fullurl/`
    );
    setData(response.data);
    // console.log(response.data);
  }

  // async function OpenShortUrl(e) {
  //   console.log(shortUrl);
  //   await axios.get(`http://localhost:5000/url${shortUrl}`).then((response) => {
  //     console.log(response);
  //   });
  // }

  useEffect(() => {
    handleSubmit();
    Urldata();
  }, []);

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

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <Typography variant="h5" component="h2">
                  Long-FullUrl
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="h5" component="h2">
                  Short-FullUrl
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant="h5" component="h2">
                  Share
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h5" component="h2">
                  copy Link
                </Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {Data.filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            }).map((item) => {
              return (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.price}</StyledTableCell>
                </StyledTableRow>
              );
            })} */}
            {Data.map((e) => {
              return (
                <StyledTableRow key={e.id}>
                  <StyledTableCell component="th" scope="row">
                    {e.FullUrl}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      target="_blank"
                      href={`http://localhost:5000/url/${e.shortUrl}`}
                    >
                      {e.shortUrl}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      target="_blank"
                      href={`http://localhost:5000/url/${e.shortUrl}`}
                    >
                      Share link <ShareIcon />
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `http://localhost:5000/url/${e.shortUrl}`
                        )
                      }
                    >
                      <AssignmentIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UrlShort;
