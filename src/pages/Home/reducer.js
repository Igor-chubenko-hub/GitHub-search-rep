import immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

import {
  addNumber,
  addSearchValue,
  getRepositoriesSuccess,
  errorHandler,
  popapErrorChange,
  bounceChange,
} from './actions';

export const actionTypes = {};

const initialState = immutable({
  numberTest: 10,
  searchValue: '',
  user: {
    info: null,
    repositories: null,
  },
  error: null,
  popApp: false,
  bounce: true,
});

const reducers = handleActions(
  {
    [addNumber]: (state, action) => ({
      ...state,
      numberTest: action.payload,
    }),
    [addSearchValue]: (state, action) => ({
      ...state,
      searchValue: action.payload,
    }),
    [bounceChange]: state => ({
      ...state,
      bounce: !state.bounce,
    }),
    [getRepositoriesSuccess]: (state, action) => ({
      ...state,
      user: { ...action.payload },
      bounce: !state.bounce,
    }),
    [errorHandler]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [popapErrorChange]: (state, action) => ({
      ...state,
      popApp: action.payload,
    }),
  },
  initialState,
);

export default reduceReducers(reducers);
