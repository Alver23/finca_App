/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { above, colors } from "../../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  .button {
    margin-top: -10px;
    width: 90vw;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: ${colors.green};
    color: #fff;
    text-decoration: none;
  }
`;

const Box = styled.div`
  width: 100%;
  ${"" /* height: 80px; */}
  margin: 2px 0px;
  padding: 2px 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${above.mediumL`
    flex-direction: row;
  `};
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  li {
    width: 420px;
    height: 100px;
    margin: 5px 4px;
    background: #f6f8f9;
    ${"" /* border: 1px solid #ccc; */}
    border-radius: 4px;
    color: black;
    text-decoration: none;

    .link {
      text-decoration: none;
    }
  }
`;

export { Container, Box, List };
