import { createSelector } from "reselect";

let calculatorPageSelector = (state: any) => state.calculatorPage;

export let productData = createSelector(
  calculatorPageSelector,
  calculatorPage => calculatorPage.productData
);
export let products = createSelector(
  calculatorPageSelector,
  calculatorPage => calculatorPage.allProducts
);
export let productName = (state: any) => state.calculatorPage.productData.name;
