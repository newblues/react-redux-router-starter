import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';

const appReducer = combineReducers({
  data: dataReducer
});

export default appReducer;
