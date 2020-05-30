import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "../GlobalStyle";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Badges from "../containers/Badges";
import Gastos from "../containers/Gastos";
import NewBadge from "../containers/NewBadge";
import NewVenta from "../containers/NewVenta";
import BadgeDetailsContainer from "../containers/BadgeDetailsContainer";
import VentaDetailsContainer from "../containers/VentaDetailsContainer";
import EditBadge from "../containers/EditBadge";
import EditVenta from "../containers/EditVenta";
import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";
import Ventas from "../containers/Ventas";
import GananciasVsGastos from "../containers/GananciasVsGastos";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={NewBadge} />
          <Route
            exact
            path="/badges/:badgeId/details"
            component={BadgeDetailsContainer}
          />
          <Route
            exact
            path="/ventas/:ventaId/details"
            component={VentaDetailsContainer}
          />
          <Route exact path="/badges/:badgeId/edit" component={EditBadge} />
          <Route exact path="/ventas/:ventaId/edit" component={EditVenta} />
          <Route exact path={"/gastos"} component={Gastos} />
          <Route exact path={"/ventas"} component={Ventas} />
          <Route exact path={"/ventas/new"} component={NewVenta} />
          <Route exact path={"/gastosVsVentas"} component={GananciasVsGastos} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
