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

        <h1 className="home__title">
          <FormattedMessage {...messages.welcome} />
        </h1>
        <div>
          {this.props.posts.map(
            (post) => (
              <div key={post.get('id')}>
                <Link to={`/post/${post.get('id')}`}>
                  {post.get('title')}
                </Link>
              </div>
            )
          )}
        </div>
        <div>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>
    );
  }
}
