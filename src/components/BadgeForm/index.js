import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Form, Input, Button } from "./styles";

const BadgeForm = (props) => {
  const {
    formValues: { nombre, descripcion, date, costo, tiempo },
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
          name="nombre"
          value={nombre}
          placeholder="Nombre del trabajo"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="descripcion"
          value={descripcion}
          placeholder="Descripcion del trabajo"
          required
        />
        <Input
          onChange={onChange}
          type="date"
          name="fecha"
          value={date}
          placeholder="date"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="tiempo"
          value={tiempo}
          placeholder="Dias trabajados"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="costo"
          value={costo}
          placeholder="Costo del trabajo"
          required
        />
        {error && <p>{error.message}</p>}
        <Button type="submit">Guardar</Button>
      </Form>
    </Container>
  );
};

BadgeForm.propTypes = {
  formValues: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  title: PropTypes.string,
};

export default BadgeForm;
