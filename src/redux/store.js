import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSaga from 'redux-saga';

import reducers from 'redux/modules/';
import sagas from 'sagas/';

const sagaMiddleware = createSaga();

const configureStore = (initialState = {}) => {
    const store = createStore(
        combineReducers(reducers),
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    sagaMiddleware.run(sagas);
    return store;
};

export default configureStore();
