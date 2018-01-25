import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Home } from './home.component';
import { PostsActions } from '../../modules/posts/posts.redux';
import { selectPostsItems } from '../../modules/posts/posts.selectors';

const mapStateToProps = createStructuredSelector({
  posts: selectPostsItems,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPostsList: PostsActions.fetchList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
