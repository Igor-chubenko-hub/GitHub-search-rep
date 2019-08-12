import {
  takeEvery, call, select, put,
} from 'redux-saga/effects';
import adapter from '../../axiosInstance';
import {
  getRepositories,
  getRepositoriesSuccess,
  errorHandler,
  popapErrorChange,
  bounceChange,
} from './actions';

const HANDLERS = {
  * [getRepositories]() {
    const searchValue = yield select(state => state.home.searchValue);
    try {
      const response = yield call(adapter, `https://api.github.com/users/${searchValue}`, {
        method: 'get',
      });
      const rep = yield call(adapter, `https://api.github.com/users/${searchValue}/repos`, {
        method: 'get',
      });
      yield put(getRepositoriesSuccess({ repositories: rep.data, info: response.data }));
      yield put(bounceChange());
    } catch (err) {
      yield put(errorHandler(err.response.data.message));
      yield put(popapErrorChange(true));
    }
  },
};
export function* sagaWatcher({ type, payload }) {
  const handler = HANDLERS[type];
  if (handler != null) yield handler(payload);
}


export default function* sagaReducerAuth() {
  yield takeEvery('*', sagaWatcher);
}
