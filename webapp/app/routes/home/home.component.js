import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import moment from 'moment';

import messages from './home.messages';


export class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    fetchPostsList: PropTypes.func.isRequired,
    fetchCategoriesList: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    this.props.fetchPostsList();
    this.props.fetchCategoriesList();
  }

  formatDate = (date) => moment(date).format("Do MMMM, HH:mm");

  render() {
    return (
      <div className="home">
        <Helmet title="Homepage" />
        <div className="home__filter-container">
          {this.props.categories.map(
            (category) => (
              <div className="home__category" key={category.get('id')}>
                <div className="home__category">
                  {category.get('name')}
                </div>
              </div>
            )
          )}
        </div>
        <div className="home__posts-container">
          <div className="home__posts-list">
            {this.props.posts.map(
              (post) => (
                <div className="home__posts-item" key={post.get('id')}>
                  <div className="home__posts-item-date">{this.formatDate(post.get('timestamp'))}</div>
                  <Link className="home__posts-item-link" to={`/post/${post.get('id')}`} style={{ backgroundImage: `url(${post.get('hero')})` }}>
                  </Link>
                  <div className="home__posts-item-title">{post.get('title')}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
