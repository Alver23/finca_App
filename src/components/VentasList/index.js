import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import VentasListItem from "../VentasListItem";
import { Container, Box, Input, List, Texto } from "./styles";
import "../../components/styles/Input.css";
const SIZE = "25px";

const VentasList = (props) => {
  const {
    ventasReducer: { ventas },
  } = props;

  const [query, setQuery] = React.useState("");
  const [filteredVentas, setFilteredVentas] = React.useState(ventas);

  React.useMemo(() => {
    const result = ventas.filter((venta) => {
      return `${venta.nameVenta} ${venta.valorVenta}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredVentas(result);
  }, [ventas, query]);

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Box>
        <Link className="button" to="/ventas/new">
          Agregar una nueva venta
        </Link>

        {/* <Input
          value={query}
          type="text"
          placeholder="Buscar un venta..."
          onChange={onChange}
        /> */}
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <MdSearch size={SIZE} />
                </span>
              </div>
              <Input
                type="text"
                className="form-control"
                placeholder="Buscar un trabajo..."
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </Box>
      {filteredVentas.length > 0 && (
        <List>
          {filteredVentas.map((venta) => {
            return (
              <li key={venta._id}>
                <Link className="link" to={`/ventas/${venta._id}/details`}>
                  <VentasListItem venta={venta} />
                </Link>
              </li>
            );
          })}
        </List>
      )}
      {filteredVentas.length === 0 && (
        <Box>
          <Texto>No tienes ventas registradas</Texto>
        </Box>
      )}
    </Container>
  );
};

VentasList.propTypes = { ventas: PropTypes.array };

const mapStateToProps = (state) => {
  return { ventasReducer: state.ventasReducer };
};

export default connect(mapStateToProps, null)(VentasList);
