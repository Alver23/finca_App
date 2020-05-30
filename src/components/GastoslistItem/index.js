import React from "react";
import PropTypes from "prop-types";
import "../styles/BadgesCard.css";
import { Item, UserBox } from "./styles";

const GastosListItem = ({ badge }) => {
  const { descripcion, costo, total } = badge;

  console.log(badge.costo);

  /* var value = badge.costo;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  console.log(formatterPeso.format(value));  */
  // → $ 12.500

  return (
    <Item>
      <div>
        <p className="Card__gastos">
          <br />
          Descripcion:{" "}
          <span style={{ fontWeight: "lighter" }}>{descripcion}</span>
          <br />
          Costo: $ <span style={{ fontWeight: "lighter" }}>{costo}</span>
          <br />
        </p>
      </div>
    </Item>
  );
};

GastosListItem.propTypes = { badge: PropTypes.object.isRequired };
export default GastosListItem;
