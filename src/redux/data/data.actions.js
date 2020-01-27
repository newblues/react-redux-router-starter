import dataActionTypes from './data.types';

const END_POINT = 'https://';

export const fetchDataStart = () => ({
  type: dataActionTypes.FETCH_DATA_START
});

export const fetchDataSuccess = planetsList => ({
  type: dataActionTypes.FETCH_DATA_SUCCESS,
  payload: planetsList
});

export const fetchDataFailure = errorMessage => ({
  type: dataActionTypes.FETCH_DATA_FAILURE,
  payload: errorMessage
});

export const fetchDataStartAsync = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    fetch(`${END_POINT}/`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(fetchDataSuccess(json)))
      .catch(error => dispatch(fetchDataFailure(error)));
  };
};
