import React from "react";

import StyledAbout from "./StyledAbout";

const About = (props) => {
    return (
        <StyledAbout>
            <div className="banner">
                <span />
                <div>
                    <h2>Brandon Ramirez</h2>
                    <p>
                        Ut do nulla cupidatat nulla officia labore consequat
                        culpa ex. Qui qui ullamco do laborum pariatur. Elit
                        dolor aliquip voluptate minim ut est non. Officia ipsum
                        consequat reprehenderit sit anim ea irure nulla.
                    </p>
                </div>
            </div>
            <div className="banner vert alt">
                <h3>Relevant Skills</h3>
                <ul>
                    <li>React.js</li>
                    <li>Redux-Thunk</li>
                    <li>Python OOP</li>
                    <li>Data Structures</li>
                </ul>
            </div>
            <div className="banner vert">
                <h3>Some Content</h3>
                <p>How does this look?</p>
            </div>
        </StyledAbout>
    );
};

export default About;
