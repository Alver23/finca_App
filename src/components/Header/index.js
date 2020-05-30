import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/favicon.png";
import StyledHeader from "./styles";

const LOGO =
  "https://res.cloudinary.com/imagesfull/image/upload/v1589507010/like/favicon_uzcjyd.png";

const Header = () => (
  <StyledHeader>
    <img className="logo" src={LOGO} alt="Finca Logo" />
    <Link to="/">
      <p>
        <span>Finca</span>
        App
      </p>
    </Link>
  </StyledHeader>
);

export default Header;
