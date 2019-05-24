import React from "react";
import style from "./CalcPage.module.css";
import { Card } from "antd";

const Products = (props: any) => {
  let productItemsCommon = <span></span>;
  if (props.products.common !== undefined) {
    productItemsCommon = props.products.common.map((item: any) => {
      return (
        <Card
          title={item.food_name}
          extra={<a href="#">Choose</a>}
          key={item.tag_id}
          data-product-id={item.tag_id}
          style={{ width: 200, height: 200 , margin: 5}}
        >
          <img src={item.photo.thumb} />
        </Card>
      );
    });
    return productItemsCommon;
  }
  return <div>{productItemsCommon}</div>;
};

export default Products;
