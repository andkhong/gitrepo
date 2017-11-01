import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './../reducers/';

import { autoRehydrate, persistStore } from 'redux-persist';

let store = compose(
  applyMiddleware(thunk),
  autoRehydrate()
)(createStore)(appReducer);

persistStore(store);
export default store;