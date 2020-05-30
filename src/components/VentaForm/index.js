import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Form, Input, Button } from "./styles";

const VentaForm = (props) => {
  const {
    formValues: { nameVenta, date, valorVenta },
    error,
    onChange,
    onSubmit,
    title,
  } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          name="nameVenta"
          value={nameVenta}
          placeholder="Nombre de la venta"
          required
        />

        <Input
          onChange={onChange}
          type="date"
          name="fechaVenta"
          value={date}
          placeholder="date"
          required
        />

        <Input
          onChange={onChange}
          type="text"
          name="valorVenta"
          value={valorVenta}
          placeholder="Valor de la venta"
          required
        />
        {error && <p>{error.message}</p>}
        <Button type="submit">Guardar</Button>
      </Form>
    </Container>
  );
};

VentaForm.propTypes = {
  formValues: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  title: PropTypes.string,
};

export default VentaForm;
