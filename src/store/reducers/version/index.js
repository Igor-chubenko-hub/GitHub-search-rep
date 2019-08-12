import immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

const initialState = immutable({
  version: '0.0.1',
});

const reducers = handleActions(
  {},
  initialState,
);

export default reduceReducers(reducers);
