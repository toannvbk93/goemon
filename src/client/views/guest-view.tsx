import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/Menu/MenuItem';

import { mailFolderListItems, otherMailFolderListItems } from './member/member-menu';
import { styles, StylesTypes } from './member/member-style';

interface IProps  {
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

type ClassNames = keyof StylesTypes;

  class MemberView extends React.Component<IProps & WithStyles<ClassNames>, {}> {

    state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    };

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    }

    public render() {
      const { classes } = this.props;
      return (
        <h1>hello Guest</h1>
        );
    }
  }

export default withStyles<{} & ClassNames>(styles)<IProps>(MemberView);
