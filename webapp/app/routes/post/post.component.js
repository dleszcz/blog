import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Post extends PureComponent {
  static propTypes = {
    fetchSinglePost: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.fetchSinglePost(this.props.match.params.id);
  }

  render() {
    return (
      <div className="post">
        <div className="post__hero" style={{ backgroundImage: `url(${this.props.post.get('hero')})` }}>
          <div className="post__hero-title">
            {this.props.post.get('title')}
          </div>
        </div>

      </div>
    );
  }
}
