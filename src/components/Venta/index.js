import React from "react";
import PropTypes from "prop-types";
import Gravatar from "../GravatarVenta";
import { Container, Header, Box, Footer } from "./styles";

const Venta = ({ venta }) => {
  const { nameVenta, fechaVenta, valorVenta, email } = venta;

  return (
    <Container>
      <Header>{}</Header>
      <Box>
        <Gravatar email={email} />
        <p className="Card__jobTitle">
          Nombre de la venta:{" "}
          <span style={{ fontWeight: "lighter" }}>{nameVenta || "Nombre"}</span>
          <br />
          Fecha:{" "}
          <span style={{ fontWeight: "lighter" }}>{fechaVenta || "Fecha"}</span>
          <br />
          Valor venta: ${" "}
          <span style={{ fontWeight: "lighter" }}>{valorVenta || "Costo"}</span>
        </p>
      </Box>
      <Footer>
        <p>FincaApp</p>
      </Footer>
    </Container>
  );
};

Venta.propTypes = {
  venta: PropTypes.object,
};

export default Venta;
