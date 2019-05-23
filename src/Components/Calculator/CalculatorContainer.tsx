import React from "react";
import Calculator from "./Calculator";
import { connect } from 'react-redux';
import { productData, products } from "../../redux/selectors";
import { setProductName, setProductWeight, loadProductsLoading } from "../../redux/calculator-reducer";

const CalculatorContainer = (props:any) => {
  return (
    <Calculator 
    product = {props.product}
    products = {props.products}
    setProductName = {props.setProductName}
    setProductWeight = {props.setProductWeight}
    loadProduct = {props.loadProduct}
    />
  );
};
const mapStateToProps = (state:any) => {
  return ({
    product: productData(state),
    products: products(state)
  })
}
const mapDispatchToProps = (dispatch: any) => {
  return ({
    setProductName: (name:string) => {
      dispatch(setProductName(name))
    },
    setProductWeight: (weight:number) => {
      dispatch(setProductWeight(weight))
    },
    loadProduct: () => {
      dispatch(loadProductsLoading())
    },
  }
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(CalculatorContainer);
