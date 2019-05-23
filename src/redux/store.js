import { combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import calculatorReducer from "./calculator-reducer";
import watcherSaga from './saga-worker';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    calculatorPage: calculatorReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga)
export default store;