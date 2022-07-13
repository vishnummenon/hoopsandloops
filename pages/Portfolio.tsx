import React from 'react';
import Script from "next/script";
import Head from "next/head";

import {
  Tagline,
  Contact,
  IProduct,
  Album,
  PassionProjects,
} from "../components";

interface IProductListProps {
  products: IProduct[];
}

export default function Home({ products }: IProductListProps) {
  return (
    <>
      <Head>
        <title>hoopsandloops</title>
      </Head>
      <main className="main">
        Portfolio
        <Contact />
      </main>
    </>
  );
}
