import styled from "styled-components";
import styles from "../../data/styles";
const { color, font } = styles;

const StyledAbout = styled.div`
    background-color: ${color.pale};
    div.banner {
        padding: 5vh 10%;
        display: flex;
        flex-flow: row nowrap;
        border-bottom: 1px solid ${color.dark};
        &:last-of-type {
            border-bottom: none;
        }
        span {
            display: block;
            height: 12rem;
            min-width: 12rem;
            border-radius: 6rem;
            border: 1px solid black;
        }
        div {
            padding-left: 5vw;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            h2 {
                font-family: ${font.main};
                font-size: 3rem;
            }
            p {
                font-family: ${font.accent};
            }
        }
        &.alt {
            background-color: ${color.light};
        }
        &.vert {
            flex-flow: column nowrap;
            h3 {
                font-size: 4rem;
                font-family: ${font.main};
            }
            ul {
                list-style-position: inside;
                li {
                    font-size: 1.5rem;
                    font-family: ${font.accent};
                }
            }
        }
    }
`;

export default StyledAbout;
