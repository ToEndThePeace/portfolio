import styled from "styled-components";
import styles from "../../data/styles";
const { color, font, media } = styles;

const StyledAbout = styled.div`
    background-color: ${color.pale};
    div.banner {
        padding: 5vh 10%;
        display: flex;
        flex-flow: column nowrap;
        &.splash {
            flex-flow: row nowrap;
            align-items: center;
        }
        @media ${media.small} {
            justify-content: center;
        }
        img {
            max-width: 50%;
            border-radius: 100vw;
            box-shadow: 0 0 20px ${color.med};
            -moz-box-shadow: 0 0 20px ${color.med};
            margin-bottom: 2.5vh;
            @media ${media.small} {
                margin-right: 2.5vh;
                max-height: 30vh;
            }
        }
        div {
            text-align: center;
            margin-left: 2.5vw;
            padding: 2.5vh 3.5vw;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            background-color: ${color.pale}DD;
            box-shadow: 0 0 20px ${color.dark};
            -moz-box-shadow: 0 0 20px ${color.dark};
            @media ${media.small} {
                max-width: 400px;
            }
            h2 {
                font-family: ${font.main};
                font-size: 3rem;
            }
            p {
                font-family: ${font.accent};
                font-size: 1.1rem;
            }
        }
        h3 {
            text-align: center;
        }
        &.alt {
            background-color: ${color.light};
            z-index: 2;
        }
        &:first-of-type {
            background: url(${require("../../assets/img/cubes.svg")}) no-repeat
                center center fixed;
            background-size: cover;
            align-items: center;
            z-index: -5;
            box-shadow: inset 0 0 20px ${color.dark};
            @media ${media.small} {
                flex-flow: row nowrap;
            }
        }
        &.vert {
            flex-flow: column nowrap;
            p {
                font-size: 1.4rem;
                font-family: ${font.accent};
            }
            ul {
                list-style-position: inside;
                li {
                    font-size: 1.2rem;
                    font-family: ${font.accent};
                }
            }
            h3 {
                font-size: 4rem;
                font-family: ${font.main};
            }
        }
    }
`;

export default StyledAbout;
