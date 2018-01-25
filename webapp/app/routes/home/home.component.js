import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';
import { Link } from 'react-router-dom';

import messages from './home.messages';


export class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.object,
    fetchPostsList: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    this.props.fetchPostsList();
  }

  render() {
    return (
      <div className="home">
        <Helmet title="Homepage" />
        <div className="home__posts-container">
          <h1 className="home__posts-title">
            My posts
          </h1>
          <div className="home__posts-list">
            {this.props.posts.map(
              (post) => (
                <div className="home__posts-list-item" key={post.get('id')}>
                  <Link to={`/post/${post.get('id')}`}>
                    {post.get('title')}
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
