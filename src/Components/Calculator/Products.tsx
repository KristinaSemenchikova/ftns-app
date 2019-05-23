import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const ProductItem = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`;
const IMG = styled.img`
  height: 100px;
`;

const ProductArea = (props: any) => {
  let productItemsBranded = null;
  if (props.products.branded !== undefined) {
    let productItemsBranded = props.products.branded.map((item: any) => {
      return (
        <ProductItem>
          <IMG src={item.photo.thumb} />
          <span>{item.food_name}</span>
          <span>Calories: {item.nf_calories}</span>
        </ProductItem>
      );
    });
    return productItemsBranded;
  }
  return (
    <>
      {props.products.length > 0 ? (
        <Wrapper>
          <Product>
            <span>Common food</span>
          </Product>
          <Product>
            <span>Branded food</span>
            {productItemsBranded}
          </Product>
        </Wrapper>
      ) : (
        <span>No food</span>
      )}
    </>
  );
};

export default ProductArea;
