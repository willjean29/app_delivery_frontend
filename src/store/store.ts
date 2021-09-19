import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import RootReducer from 'store/root.reducers';
import thunk from 'redux-thunk';

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootStore = ReturnType<typeof RootReducer>;
