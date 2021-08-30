import * as React from "react";
import { useState } from "react";
import axios from "axios";
import img1 from "../assets/img1.svg";

/** import from materail ui */
import {
  Paper,
  withStyles,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { DoneOutline } from "@material-ui/icons";

const styles = () => ({
  container: {
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    minWidth: "400px",
    minHeight: "300px",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "30px",
    width: "100px",
  },
  doneIcon: {
    width: "2em",
    height: "2em",
    marginBottom: "20px",
  },
  errorText: {
    color: "red",
  },
});

function ResetPassword({ classes, token }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (callback) => (event) => {
    callback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPassword("");
    setConfirmPassword("");
    if (password !== confirmPassword) setError(true);
    else {
      const myData = {
        confirmPassword,
      };
      axios.post(
        `https://password-reset-guvi.herokuapp.com/users/reset-password/${token}`,
        myData
      );
      console.log(token);
      setDone(true);
    }
  };

  return (
    <>
      <Paper className={classes.container}>
        {done ? (
          <React.Fragment>
            <DoneOutline className={classes.doneIcon} />
            <Typography variant="h5" gutterBottom>
              All done!
            </Typography>
          </React.Fragment>
        ) : (
          <form
            className={classes.container}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Typography variant="h5" gutterBottom>
              Create a new password
            </Typography>
            <TextField
              id="password"
              type="password"
              required
              error={error}
              label="New password"
              className={classes.textField}
              value={password}
              onChange={handleChange(setPassword)}
              margin="normal"
            />
            <TextField
              id="confirmPassword"
              type="password"
              required
              error={error}
              label="Confirm new password"
              className={classes.textField}
              value={confirmPassword}
              onChange={handleChange(setConfirmPassword)}
              margin="normal"
            />
            {error ? (
              <Typography className={classes.errorText} variant="subtitle2">
                Passwords must match!
              </Typography>
            ) : (
              <React.Fragment />
            )}
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}
              onSubmit={handleSubmit}
            >
              Create
            </Button>
          </form>
        )}
      </Paper>
      <img
        src={img1}
        alt=" img"
        style={{ width: "700px", height: "500px" }}
      ></img>
    </>
  );
}

export default withStyles(styles)(ResetPassword);
