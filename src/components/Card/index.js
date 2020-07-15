import React, { useState } from "react";

import StyledCard from "./StyledCard";

const Card = (props) => {
  const [show, setShow] = useState(false);

  const toggleDesc = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <StyledCard>
      <span />
      <div>
        <div onClick={toggleDesc}>
          <h2>Card</h2>
          <span className="arrows">{show ? <>&#9650;</> : <>&#9660;</>}</span>
        </div>
        <div className={`desc ${show ? "" : "hidden"}`}>
          <div className="tags">
            <div>React</div>
            <div>Redux</div>
          </div>
          <p>
            Fugiat deserunt pariatur cillum reprehenderit eu ipsum culpa
            deserunt reprehenderit eu. In laboris velit nulla deserunt proident
            voluptate Lorem deserunt consequat ipsum quis laborum consequat
            aute. Sint consectetur adipisicing cupidatat est excepteur
            consequat.
          </p>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
