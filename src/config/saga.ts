import { all, fork } from 'redux-saga/effects';

import moviesSagas from '@store/movies/moviesSagas';

export default function* rootSaga() {
  yield all([fork(moviesSagas)]);
}
