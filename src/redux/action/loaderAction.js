import { SHOW_LOADER } from '../reduxConstants';

export function showLoader() {
  return (dispatch) => dispatch({ type: SHOW_LOADER, data: true });
}

export function hideLoader() {
  return (dispatch) => dispatch({ type: SHOW_LOADER, data: false });
}
