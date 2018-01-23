import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import App from './app.container';
import Contact from './contact';
import Home from './home';
import NotFound from './notFound';

export class RootContainer extends PureComponent {
  render() {
    return (
      <Switch>

        <Route exact path="/404" component={NotFound} />
        <Route exact path="/contact" component={Contact} />

        <Route path="">
          <App>
            <Switch>
              <Route exact path="" component={Home} />

              <Route exact path="/contact" component={Contact} />

              <Route component={NotFound} />
            </Switch>
          </App>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(RootContainer);
