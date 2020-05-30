import React from "react";
import PropTypes from "prop-types";
import "../styles/BadgesCard.css";
import { Item, UserBox } from "./styles";
import Gravatar from "../Gravatar";

const BadgesListItem = ({ badge }) => {
  const { nombre, descripcion, fecha, tiempo, costo, email } = badge;

  return (
    <Item>
      <Gravatar email={email} />
      <div>
        <p className="Card__jobTitle">
          Nombre del trabajo:{" "}
          <span style={{ fontWeight: "lighter" }}>{nombre}</span>
          <br />
          Descripcion:{" "}
          <span style={{ fontWeight: "lighter" }}>{descripcion}</span>
          <br />
          Fecha: <span style={{ fontWeight: "lighter" }}>{fecha}</span>
          <br />
          Dias trabajados:{" "}
          <span style={{ fontWeight: "lighter" }}>{tiempo}</span>
          <br />
          Costo: $ <span style={{ fontWeight: "lighter" }}>{costo}</span>
        </p>
      </div>
    </Item>
  );
};

BadgesListItem.propTypes = { badge: PropTypes.object.isRequired };

export default BadgesListItem;
