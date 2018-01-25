import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Header extends PureComponent {
  static propTypes = {
  };

  componentWillMount() {

  }

  render() {
    return (
      <div className="header">
        <Link className="header__logo" to={'/'} />
      </div>
    );
  }
}
