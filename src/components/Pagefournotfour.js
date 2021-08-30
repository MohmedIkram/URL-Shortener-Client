import React from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";

import astronaut from "../assets/astronaut.svg";
import planet from "../assets/planet.svg";
/** imported components */
import "./Pagefournotfour.css";

/** import from materail ui */
import Button from "@material-ui/core/Button";

function ErrorPage() {
  return (
    <div>
      <ParticleBackground />
      <Pagefournotfour />
    </div>
  );
}

function Pagefournotfour() {
  return (
    <div class="permission_denied">
      <div class="denied__wrapper">
        <h1>404</h1>
        <h3>
          LOST IN <span>SPACE</span> Url-Shortener? Hmm, looks like that page
          doesn't exist.
        </h3>
        <img id="astronaut" src={astronaut} />
        <img id="planet" src={planet} />
        <Button color="inherit" class="denied__link" component={Link} to="/">
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default ErrorPage;
