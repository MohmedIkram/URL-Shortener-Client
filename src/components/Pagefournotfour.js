import React from "react";
import astronaut from "../assets/astronaut.svg";
import planet from "../assets/planet.svg";
import "./Pagefournotfour.css";
import ParticleBackground from "./ParticleBackground";
import { Link } from "react-router-dom";
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
        <img id="astronaut" src={astronaut} alt="astronaut " />
        <img id="planet" src={planet} alt="planet " />
        <Button color="inherit" class="denied__link" component={Link} to="/">
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default ErrorPage;
