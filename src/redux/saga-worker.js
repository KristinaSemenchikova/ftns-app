import { put, takeEvery,select} from 'redux-saga/effects'
import {getProductData} from './ajax-requests/request';
import { loadProductsSuccess, loadProductsError } from './calculator-reducer';
import { productName } from './selectors';


function* loadProducts() {
    const name = yield select(productName);
    try {
        const product = yield getProductData(name);
        yield put (loadProductsSuccess(product.data))
    } catch (e) {
        yield put(loadProductsError());
    }
}
function* watcherSaga() {
    yield takeEvery('REDUX_SAGA_LOAD_PRODUCTS_LOADING', loadProducts);

}
export default watcherSaga;