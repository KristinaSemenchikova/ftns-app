import React from "react";
import styled from "styled-components";
import ProductArea from "./Products";

const CalcWrapper = styled.main`
  color: white;
  grid-area: m;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Form = styled.div``;
const Input = styled.input`
  margin: 0.5em;
  padding: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: white;
  border: none;
  border-radius: 3px;
  color: black;
  size: 90px;
  font-family: "Lucida Sans";
  font-size: 22px;
  margin: 0.5em;
`;
const Calculator = (props: any) => {
  let setProductName = (e: any) => {
    props.setProductName(e.target.value);
  };

  let getProduct = () => {
    props.loadProduct(props.product.name);
  };
  return (
    <CalcWrapper>
      <Form>
        <span> Product</span>
        <Input
          type="text"
          required
          value={props.product.name}
          onChange={setProductName}
        />
        <Button onClick={getProduct}>Find</Button>
      </Form>
     <ProductArea products = {props.products}/>
    </CalcWrapper>  
  );
};

export default Calculator;
