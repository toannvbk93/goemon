import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Link, match } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createMuiTheme } from 'material-ui/styles';
import MemberView from '../views/member-view';
import Profile from '../views/profile';
import { NotFound } from '../views/components/notfound';
import { blue, red  } from 'material-ui/colors';

interface IProps  {
  // routes: any;
}

interface IState {
  hasError: boolean;
}

export const routes = [
  {
    path: '/admin',
    component: MemberView,
    exact: true
  }, {
    path: '/*',
    component: NotFound
  }
];

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    grey: red,
    type: 'light'
  }
});

export class MemberApp extends React.Component<IProps, IState> {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render () {
    // const { match } = this.props;
    return (
      renderRoutes(routes)
    );
  }
}
