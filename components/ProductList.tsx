import React, { FC } from "react";

import Product from "./Product";
import { IProduct } from "./types";

interface IProductListProps {
  products: IProduct[];
}

const ProductList: FC<IProductListProps> = (props: IProductListProps) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
