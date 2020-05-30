import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "./styles";
import PageLoading from "../../components/PageLoading";
import GastosList from "../../components/GastosList";
import PageError from "../../components/PageError";
import { getBadges } from "../../redux/actions";

const Gastos = (props) => {
  const {
    badgesReducer: { loading, error },
    getBadges,
  } = props;

  useEffect(() => {
    getBadges();
    /*  let intervalId = setInterval(getBadges, 5000);
    return () => clearInterval(intervalId); */
  }, [getBadges]);

  if (error) return <PageError error={error} />;

  if (loading) return <PageLoading />;

  return (
    <Container>
      <GastosList />
    </Container>
  );
};

Gastos.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  getBadges: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    badgesReducer: state.badgesReducer,
  };
};

export default connect(mapStateToProps, { getBadges })(Gastos);
