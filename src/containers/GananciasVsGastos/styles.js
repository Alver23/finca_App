import styled from "styled-components";
import { above } from "../../GlobalStyle";

/* export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; */
const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #f6f8f9;
`;

const ContainerBadge = styled.div`
  width: 100%;
  height: 340px;
  margin: 20px 0 0 0;
  ${above.mediumL`
    width: 50%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `};
`;

export { Container, ContainerBadge };
