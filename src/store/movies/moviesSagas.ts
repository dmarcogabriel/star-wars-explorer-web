import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import api from '@config/api';

import { IGetMoviesResponse } from '@interfaces/movieStoreInterface';

import { getMovies, getMoviesFailure, getMoviesSuccess } from './moviesSlice';

function* loadMovies() {
  const endpoint = 'films';

  try {
    const { data }: AxiosResponse<IGetMoviesResponse> = yield call(
      api.get,
      endpoint,
    );
    yield put(getMoviesSuccess(data));
  } catch (error) {
    yield put(getMoviesFailure());
  }
}

export default function* moviesSagas() {
  yield takeLatest(getMovies, loadMovies);
}
