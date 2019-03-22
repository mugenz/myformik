import React from 'react';
import { Route, Switch} from 'react-router-dom';
import RenderUse from './RenderUse';
import CompUse from './CompUse';

class Main extends React.Component {
  renderRoutes = () => {
    //const { config } = this.props;
    const config = {
      routes:[
        {
          path: '/',
          exact: true,
          title: 'generic.page.home.title',
          component: RenderUse,
          key: 'route_home'
        },
        {
          path: '/compuse',
          exact: true,
          title: 'generic.page.home.title',
          component: CompUse,
          key: 'route_compuse'
        }
      ]
    }
    return config.routes && config.routes.map((route) => (
      <Route
        exact
        key={route.key}
        path={route.path}
        component={route.component}
      />
    ));
  };

  render() {
    return (
      <>
        <Switch>
          {this.renderRoutes()}
        </Switch>
      </>
    );
  }
}

export default Main;
