import React from "react";

import { Nav, NavLink } from "./styles";

// Se importan los iconos desde react icons
import {
  MdHome,
  MdFilterList,
  MdAttachMoney,
  MdDone,
  MdVerticalAlignCenter,
} from "react-icons/md";

// constante con el tamaño de los iconos
const SIZE = "32px";

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/home">
        <MdHome size={SIZE} />
      </NavLink>
      <NavLink to="/badges">
        <MdFilterList size={SIZE} />
      </NavLink>
      <NavLink to="/gastos">
        <MdAttachMoney size={SIZE} />
      </NavLink>
      <NavLink to="/ventas">
        <MdDone size={SIZE} />
      </NavLink>
      <NavLink to="/gastosVsVentas">
        <MdVerticalAlignCenter size={SIZE} />
      </NavLink>
    </Nav>
  );
};
export default NavBar;
