import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GastosListItem from "../GastoslistItem";
import { Container, Box, Input, List } from "./styles";

const GastosList = (props) => {
  const {
    badgesReducer: { badges },
  } = props;

  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.nombre} ${badge.descripcion}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Box>
        <Link className="button" to="#">
          Gastos en trabajos
        </Link>
      </Box>
      {filteredBadges.length > 0 && (
        <List>
          {filteredBadges.map((badge) => {
            return (
              <li key={badge._id}>
                <Link className="link" to={`#`}>
                  <GastosListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </List>
      )}
    </Container>
  );
};

GastosList.propTypes = { badges: PropTypes.array };

const mapStateToProps = (state) => {
  return { badgesReducer: state.badgesReducer };
};

export default connect(mapStateToProps, null)(GastosList);
