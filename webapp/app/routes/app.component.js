import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import Header from '../components/header/header.component';


export class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
  };


  render() {

    return (
      <div className="app">
        <Helmet
          titleTemplate="%s - dblog"
          defaultTitle="dblog"
          meta={[
            { name: 'description', content: 'dblog application' },
          ]}
        />

        <IntlProvider
          location={this.props.location}
          locale="en"
        >
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </div>
    );
  }
}
