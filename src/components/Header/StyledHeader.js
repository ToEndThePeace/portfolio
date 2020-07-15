import styled from "styled-components";
import styles from "../../data/styles";
const { color, font, media } = styles;

const StyledHeader = styled.header`
  background-color: black;
  min-height: 30vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${media.small} {
    position: unset;
    min-height: 15vh;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0 10%;
  }
  @media ${media.tiny} {
    justify-content: space-between;
  }
  h1 {
    font-size: 10rem;
    color: ${color.main};
    font-family: ${font.main};
    width: 100%;
    text-align: center;
    @media ${media.small} {
      text-align: left;
    }
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
    @media ${media.tablet} {
      max-width: 400px;
      margin: 0 auto;
    }
    @media ${media.small} {
      bottom: unset;
      max-width: 400px;
      position: unset;
      justify-content: flex-end;
    }
    @media ${media.tiny} {
      width: 100%;
      flex-flow: column nowrap;
      border-bottom: 1px solid ${color.dark};
      bottom: 0;
    }
    position: absolute;
    bottom: 2.5vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    a {
      @media ${media.small} {
        margin-left: 5%;
      }
      @media ${media.tiny} {
        border: none;
        padding: 5px 0;
        text-align: center;
        flex-grow: 1;
      }
      color: ${color.dark};
      background: ${color.pale};
      font-family: ${font.accent};
      font-size: 1.5rem;
      letter-spacing: 0.03rem;
      text-decoration: none;
      padding: 5px 15px 5px 13px;
      border-width: 0 0 0 2px;
      border-style: solid;
      border-color: ${color.pale};
      &:nth-child(2) {
        border-width: 0 0 2px 0;
        padding: 5px 15px 3px 15px;
      }
      &:nth-child(3) {
        border-width: 0 2px 0 0;
        padding: 5px 13px 5px 15px;
      }
      &.active,
      &:hover {
        background: ${color.light};
        color: ${color.dark};
        border-color: ${color.main};
      }
    }
  }
`;

export default StyledHeader;
