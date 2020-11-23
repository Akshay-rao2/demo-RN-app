import { SET_DATE_TIME } from '../reduxConstants';

const initialState = {
  isLoading: true,
  data: {},
  errorMessage: null,
};

export default function (state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case SET_DATE_TIME:
      return { ...state, data };
    default:
      return state;
  }
}
