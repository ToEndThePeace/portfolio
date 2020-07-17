import styled from "styled-components";
import styles from "../../data/styles";
const { color, font, media } = styles;

const StyledCard = styled.div`
    border: 1px solid ${color.dark};
    margin: 5vh auto;
    padding: 2.5vh 5%;
    background-color: ${color.pale};
    box-shadow: 0 0 20px ${color.dark};
    -moz-box-shadow: 0 0 20px ${color.dark};
    @media ${media.small} {
        display: flex;
        flex-flow: row nowrap;
    }
    @media ${media.med} {
        max-width: 800px;
        margin: 5vh auto;
    }
    &:first-of-type {
        margin-top: 2.5vh;
    }
    & > img {
        display: block;
        width: 100%;
        margin-bottom: 2.5vh;
        box-shadow: 0 0 5px ${color.dark};
        -moz-box-shadow: 0 0 5px ${color.dark};
        @media ${media.small} {
            min-width: 50%;
            margin-right: 1.25vw;
            margin-bottom: 0;
        }
    }
    & > div {
        display: flex;
        flex-flow: column nowrap;
        margin-left: 1.25vw;
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
                @media ${media.small} {
                    display: none;
                }
            }
        }
        div.desc {
            flex-grow: 1;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-evenly;
            &.hidden {
                display: none;
                @media ${media.small} {
                    display: block;
                }
            }
            div.tags {
                display: flex;
                flex-flow: row nowrap;
                justify-items: flex-start;
                div {
                    border-radius: 30px;
                    padding: 5px 10px;
                    margin: 1vh 2% 1vh 0;
                    color: ${color.pale};
                    background-color: ${color.main};
                    font-family: ${font.accent};
                    box-shadow: 0 0 6px -1px ${color.dark};
                    -moz-box-shadow: 0 0 6px -1px ${color.dark};
                }
            }
            p {
                font-size: 1.25em;
                font-family: ${font.accent};
                font-weight: 400;
            }
        }
    }
`;

export default StyledCard;
