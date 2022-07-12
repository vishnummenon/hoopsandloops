import React, { FC } from "react";
import Image from "next/image";

import aquarium from "../public/aquarium.svg";

const Jumbotron: FC = () => {
  return (
    <>
      <div className="background-image">
        <Image src={aquarium} alt={aquarium} />
      </div>
      <div className="promotional-message">
        <h3>FIND WHAT</h3>
        <h2>SPARKS JOY IN YOU</h2>
        <p>
          A <strong>curated collection of passion projects,</strong> something for
          everyone.
        </p>
      </div>
    </>
  );
};

export default Jumbotron;
