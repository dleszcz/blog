import { createSelector } from 'reselect';


const selectPostsDomain = state => state.get('posts');

export const selectPostsItems = createSelector(
  selectPostsDomain, state => state.get('items')
);
