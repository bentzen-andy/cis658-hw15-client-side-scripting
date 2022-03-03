import React from "react";
import DataRow from "./DataRow";

import products from "../../data/products.json";
import css from "./DataGrid.module.css";
import Card from "../UI/Card";

const DataGrid = () => {
  return (
    <Card>
      <table className={css["data-grid"]}>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Title</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <DataRow product={product} key={product.sku} />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default DataGrid;
