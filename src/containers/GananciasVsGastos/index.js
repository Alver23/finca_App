import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, ContainerBadge } from "./styles";
import PageLoading from "../../components/PageLoading";
import GastosVsVentasList from "../../components/GastosVsVentasList";
import PageError from "../../components/PageError";
import { getBadges } from "../../redux/actions";
import Badge from "../../components/Badge";

const Badges = (props) => {
  const {
    badgesReducer: { loading, error },
    getBadges,
  } = props;

  useEffect(() => {
    getBadges();
  }, [getBadges]);

  if (error) return <PageError error={error} />;

  if (loading) return <PageLoading />;

  return (
    <Container>
      <ContainerBadge>
        <GastosVsVentasList />
      </ContainerBadge>
    </Container>
  );
};

Badges.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  getBadges: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    badgesReducer: state.badgesReducer,
  };
};

export default connect(mapStateToProps, { getBadges })(Badges);
