import styled from "styled-components";
import styles from "../../data/styles";
const { color, font } = styles;

const StyledHeader = styled.header`
  background-color: black;
  min-height: 30vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    font-size: 5em;
    color: ${color.main};
    font-family: ${font.main};
    width: 100%;
    text-align: center;
    .rtl {
      -moz-transform: scale(-1, 1);
      -webkit-transform: scale(-1, 1);
      -o-transform: scale(-1, 1);
      -ms-transform: scale(-1, 1);
      transform: scale(-1, 1);
      display: inline-block;
    }
  }
  nav {
    position: absolute;
    bottom: 2vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${color.main};
      background: ${color.pale};
      padding: 5px 15px;
      font-family: ${font.accent};
      letter-spacing: 0.03em;
      text-decoration: none;
      &.active {
        background: ${color.light};
        color: ${color.dark};

      }
    }
  }
`;

export default StyledHeader;
