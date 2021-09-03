import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Body.css";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import shortener from "../assets/shortener.jpg";

export default function Body() {
  return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1 className="headding">Short links, big results</h1>
          <h4 className="subheadding">
            A URL shortener built with powerful tools to help you grow and
            protect your brand.
          </h4>
          <Button
            variant="contained"
            color="primary"
            className="largebutton"
            component={Link}
            to="/signUp"
          >
            Get Started For free
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} lassName="image">
          <img src={shortener} alt="shortener" />
        </Grid>
      </Grid>
    </div>
  );
}
