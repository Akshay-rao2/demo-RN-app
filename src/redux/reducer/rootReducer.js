import { combineReducers } from 'redux';
import timeData from './starReducer';
import loader from './loaderReducer';
import modal from './modalReducer';

export default combineReducers({
  timeData,
  loader,
  modal,
});
