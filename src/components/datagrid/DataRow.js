import React, { useState } from "react";
import css from "./DataRow.module.css";

const DataRow = ({ product }) => {
  const [productIsVisible, setProductIsVisible] = useState(true);

  const clickHandler = (event) => {
    setProductIsVisible(false);
  };

  return (
    <tr className={css["data-row"]}>
      {productIsVisible && <th>{product.sku}</th>}
      {productIsVisible && <th>{product.title}</th>}
      {productIsVisible && <th>{product.price}</th>}
      {productIsVisible && <th>{product.inStock ? "Yes" : "No"}</th>}
      {productIsVisible && (
        <th>
          <button onClick={clickHandler}>Remove Item</button>
        </th>
      )}
    </tr>
  );
};

export default DataRow;
