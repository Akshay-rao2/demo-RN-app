import { OPEN_MODAL, CLOSE_MODAL } from '../reduxConstants';

export default function (state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case OPEN_MODAL:
      return { ...state, modalIsOpen: true, itemId: data };
    case CLOSE_MODAL:
      return { ...state, modalIsOpen: false, itemId: null };
    default:
      return state;
  }
}
