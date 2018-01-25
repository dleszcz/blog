import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import App from './app.container';
import Contact from './contact';
import Home from './home';
import NotFound from './notFound';
import Post from './post';

export class RootContainer extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="">
          <App>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/post/:id" component={Post} />
              <Route component={NotFound} />
            </Switch>
          </App>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(RootContainer);
