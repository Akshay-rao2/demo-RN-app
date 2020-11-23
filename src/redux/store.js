import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/rootReducer';
import preloadedState from './preloadedState';

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const enhancers = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(enhancers);
  return createStore(rootReducer, preloadedState, composedEnhancers);
};
export default configureStore();
