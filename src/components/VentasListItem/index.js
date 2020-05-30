import React from "react";
import PropTypes from "prop-types";
import "../styles/BadgesCard.css";
import { Item, UserBox } from "./styles";
import Gravatar from "../GravatarVenta";

const VentasListItem = ({ venta }) => {
  const { nameVenta, fechaVenta, valorVenta, email } = venta;

  return (
    <Item>
      <Gravatar email={email} />
      <div>
        <p className="Card__jobTitle">
          Nombre de la venta:{" "}
          <span style={{ fontWeight: "lighter" }}>{nameVenta}</span>
          <br />
          Fecha:
          <span style={{ fontWeight: "lighter" }}>{fechaVenta || "fecha"}</span>
          <br />
          Valor: $ <span style={{ fontWeight: "lighter" }}>{valorVenta}</span>
        </p>
      </div>
    </Item>
  );
};

VentasListItem.propTypes = { venta: PropTypes.object.isRequired };

export default VentasListItem;
