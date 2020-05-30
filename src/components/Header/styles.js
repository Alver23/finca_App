import styled from "styled-components";
import { colors } from "../../GlobalStyle";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  padding-inline-start: 20px;
  background: ${colors.darkBlue};

  a {
    text-decoration: none;
    p {
      color: white;
      margin-left: 6px;
      margin: 0;
      padding: 0;

      span {
        font-weight: bold;
      }
    }
  }
`;

export default StyledHeader;
