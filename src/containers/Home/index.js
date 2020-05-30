import React from "react";
import { Link } from "react-router-dom";

import { Container, Image, LandPage } from "./styles";
const LOGO =
  "https://res.cloudinary.com/imagesfull/image/upload/v1589507010/like/favicon_uzcjyd.png";

const Home = () => (
  <Container>
    {/*  <Image src={astronauts} alt="Astronauts" /> */}
    <LandPage>
      <img src={LOGO} alt="PlatziConf Logo" />
      <h1>Administra tu Finca</h1>
      <h1>FincaApp te permite gestionar la administracion de tu finca</h1>

      {/* <Link to="/badges/new">Create a new badge</Link>
      <Link to="/badges">Badges List</Link> */}
    </LandPage>
  </Container>
);

export default Home;
