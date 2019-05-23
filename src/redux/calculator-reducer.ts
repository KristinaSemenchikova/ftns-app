import { createAction, handleActions } from "redux-actions";

let initialState = {
  productData: {
    name: null,
    weight : null,
    proteins : null,
    carbohydrates : null,
    fat: null,
    comment : null
  },
  allProducts : {},
  loadProduct: {
    loading: false,
    success: false,
    error: false
  },
};

export const setProductName = createAction('SET_PRODUCT_NAME');
export const setProductWeight = createAction('SET_PRODUCT_WEIGHT');

export const loadProductsLoading = createAction('REDUX_SAGA_LOAD_PRODUCTS_LOADING');
export const loadProductsSuccess = createAction('REDUX_SAGA_LOAD_PRODUCTS_SUCCESS');
export const loadProductsError = createAction('REDUX_SAGA_LOAD_PRODUCTS_ERROR');

const calculatorReducer = handleActions({
  [setProductName.toString()]: (state: any, { payload: name }: any) => {
    return { ...state, productData: { ...state.productData, name: name } };
  },
  [setProductWeight.toString()]: (state: any, { payload: weight }: any): any => {
    return { ...state, productData: { ...state.productData, weight: weight } };
    },
    [loadProductsLoading.toString()]: (state: any) => {
      return { ...state, loadStocks: { ...state.loadProduct, loading: true } };
    },
    [loadProductsSuccess.toString()]: (state: any, { payload: product }: any): any => {
      return {
        ...state, loadProduct: {
          loading: false,
          success: true,
          error: false
        },
        allProducts:  product 
      };
    },
    [loadProductsError.toString()]: (state: any) => {
      return {
        ...state, loadStocks: {
          loading: false,
          success: false,
          error: true
        },
      };
    },
  },initialState
  );
  
  export default calculatorReducer;