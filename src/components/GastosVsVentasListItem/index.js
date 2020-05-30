import React from "react";
import PropTypes from "prop-types";
import "../styles/BadgesCard.css";
import { Item, UserBox } from "./styles";
import Gravatar from "../Gravatar";

const BadgesListItem = ({ badge }) => {
  const { costo, email } = badge;

  /* let cost = 0;
  badge.forEach((badge) => (cost += parseInt(badge.costo)));
  console.log(cost); */

  return (
    <Item>
      <Gravatar email={email} />
      <div>
        <p className="Card__jobTitle">
          Total Gastos: <span style={{ fontWeight: "lighter" }}>{costo}</span>
          <br />
          Total Ventas: <span style={{ fontWeight: "lighter" }}>{costo}</span>
          <br />
          Total Ganancoas: ${" "}
          <span style={{ fontWeight: "lighter" }}>{costo}</span>
        </p>
      </div>
    </Item>
  );
};

BadgesListItem.propTypes = { badge: PropTypes.object.isRequired };

export default BadgesListItem;
