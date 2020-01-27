import dataActionTypes from './data.types';

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case dataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case dataActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default dataReducer;
