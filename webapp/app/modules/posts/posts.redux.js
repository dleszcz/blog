import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS, Map } from 'immutable';

export const { Types: PostsTypes, Creators: PostsActions } = createActions({
  fetchList: [],
  fetchListSuccess: ['data'],
  fetchListError: ['payload'],
  fetchSingle: ['id'],
  fetchSingleSuccess: ['data'],
  fetchSingleError: ['payload'],
}, { prefix: 'POSTS_' });

const PostsRecord = new Record({
  list: List(),
  single: Map(),
});

export const INITIAL_STATE = new PostsRecord({});

const getListSuccessHandler = (state = INITIAL_STATE, action) => state.set('list', fromJS(action.data));
const getSingleSuccessHandler = (state = INITIAL_STATE, action) => state.set('single', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [PostsTypes.FETCH_LIST_SUCCESS]: getListSuccessHandler,
  [PostsTypes.FETCH_SINGLE_SUCCESS]: getSingleSuccessHandler,
});
