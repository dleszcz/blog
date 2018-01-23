import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import api from '../../services/api';
import { PostsTypes, PostsActions } from './posts.redux';

export function* fetchPosts() {
  try {
    const { data } = yield api.get('postings/');

    yield put(PostsActions.fetchSuccess(data));
  } catch (e) {
    yield put(PostsActions.fetchError(e.response ? e.response.data : e));
    yield reportError(e);
  }
}

export default function* PostsSaga() {
  yield takeLatest(PostsTypes.FETCH, fetchPosts);
}
