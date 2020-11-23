import { SHOW_LOADER } from '../reduxConstants';

export default function (state = {}, action) {
  const { type, data } = action;

  switch (type) {
    case SHOW_LOADER:
      return { ...state, showLoading: data };
    default:
      return state;
  }
}
