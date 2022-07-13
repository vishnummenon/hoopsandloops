import React from 'react';
import { useRouter } from "next/router";

import Head from "next/head";

const Portfolio = () => {
  const router = useRouter();
  const {title} = router?.query;

  return (
    <React.Fragment>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="main">{title}</div>
    </React.Fragment>
  );
};

export default Portfolio;
