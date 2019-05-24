import React from "react";
import style from "./CalcPage.module.css";
import { Button, Input} from "antd";
import Products from "./Products";


const Calculator = (props: any) => {
  let setProductName = (e: any) => {
    props.setProductName(e.target.value);
  };

  let getProduct = () => {
    props.loadProduct(props.product.name);
  };
  return (
    <div className={style.calculatorWrapper}>
      <div className={style.search}>
      <span> Search products</span>
        <Input
          size="default"
          type="text"
          required
          value={props.product.name}
          onChange={setProductName}
        />
        <Button
          type="primary"
          shape="circle"
          icon="search"
          onClick={getProduct}
        />
      </div>
      <div className={style.products}>
      <Products products = {props.products}/>
      </div>
    </div>
  );
};

export default Calculator;
