import styled from "styled-components";
import styles from "../../data/styles";
const { color, media } = styles;

const StyledGallery = styled.div`
    padding: 2.5vh 10%;
    box-shadow: inset 0 0 20px ${color.dark};
    -moz-box-shadow: inset 0 0 20px ${color.dark};
    min-height: 70vh;
    @media ${media.small} {
      min-height: 85vh;
    }
`;

export default StyledGallery;
