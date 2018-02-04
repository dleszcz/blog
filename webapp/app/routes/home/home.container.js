import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Home } from './home.component';
import { PostsActions } from '../../modules/posts/posts.redux';
import { selectPostsItems, selectCategories } from '../../modules/posts/posts.selectors';

const mapStateToProps = createStructuredSelector({
  posts: selectPostsItems,
  categories: selectCategories,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPostsList: PostsActions.fetchList,
  fetchCategoriesList: PostsActions.fetchCategoriesList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
