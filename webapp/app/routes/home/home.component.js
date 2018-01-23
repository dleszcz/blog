import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';
import { Link } from 'react-router-dom';

import messages from './home.messages';


export class Home extends PureComponent {
  static propTypes = {
    items: PropTypes.object,
    fetchPosts: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="home">
        <Helmet title="Homepage" />

        <h1 className="home__title">
          <i className="home__title-logo" />
          <FormattedMessage {...messages.welcome} />
        </h1>

        <div>
          {this.props.items.map(
            (post) => (<div key={post.get('id')}>{post.get('title')}</div>)
          )}
        </div>

        <div>Environment: {envConfig.name}</div>

        <div>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>
    );
  }
}
