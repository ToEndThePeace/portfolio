import styled from "styled-components";
import styles from "../../data/styles";
const { color, font } = styles;

const StyledCard = styled.div`
  border: 1px solid ${color.dark};
  margin: 1.25vh 0;
  padding: 2.5vh 5%;
  background-color: ${color.pale};
  &:first-of-type {
    margin-top: 0;
  }
  & > span {
    display: block;
    width: 100%;
    height: 200px;
    border: 1px solid black;
    margin-bottom: 1.25vh;
  }
  & > div {
    & > div:not(.desc) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      h2 {
        font-family: ${font.main};
        font-size: 3rem;
      }
      span {
        font-size: 1.3rem;
      }
    }
    div.desc {
      display: block;
      &.hidden {
        display: none;
      }
      div.tags div {
        display: inline-block;
        border-radius: 30px;
        padding: 5px 10px;
        margin: 1vh 1% 1vh 0;
        color: ${color.pale};
        background-color: ${color.main};
        font-family: ${font.accent};
      }
      p {
        font-size: 1.2rem;
        font-family: ${font.accent};
        font-weight: 300;
      }
    }
  }
`;

export default StyledCard;
