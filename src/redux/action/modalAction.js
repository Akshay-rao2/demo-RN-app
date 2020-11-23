import { OPEN_MODAL, CLOSE_MODAL } from '../reduxConstants';

export function openModal(data) {
  return (dispatch) => dispatch({ type: OPEN_MODAL, data });
}

export function closeModal() {
  return (dispatch) => dispatch({ type: CLOSE_MODAL });
}
