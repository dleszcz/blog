import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: PostsTypes, Creators: PostsActions } = createActions({
  fetch: ['language'],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
}, { prefix: 'POSTS_' });

const PostsRecord = new Record({
  items: List(),
});

export const INITIAL_STATE = new PostsRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('items', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [PostsTypes.FETCH_SUCCESS]: getSuccessHandler,
});
