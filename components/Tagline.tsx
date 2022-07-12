import React, { FC } from "react";
import Image from "next/image";

import aquarium from "../public/aquarium.svg";

const Tagline: FC = () => {
  return (
    <>
      <div className="background-image">
        <Image src={aquarium} alt={aquarium} />
      </div>
      <div className="promotional-message">
        <h3>
          <i>{`"gifting is all about the memories you create"`}</i> 
        </h3>
      </div>
    </>
  );
};

export default Tagline;
