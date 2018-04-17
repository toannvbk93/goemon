import { Theme } from 'material-ui/styles';

const drawerWidth = 240;

export const styles = (theme: Theme) => ( {
  root: {
    flexGrow: 1,
    height: 1600,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  title: {
    flex: 1,
    color: '#ffffff',
  },
  logout: {
    color: '#ffffff',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    textColor: '#efefef',
    color: '#061345',
    height: 60,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

export interface StylesTypes {
  root: {
    flexGrow: number;
    height: number;
    zIndex: number;
    overflow: string;
    position: string;
    display: string;
  };
  title: {
    flex: number;
    color: string;
    };
  logout: {
    color: string;
  };
  appBar: {
    zIndex: number;
  };
  drawerPaper: {
    position: string;
    width: number;
  };
  content: {
    flexGrow: number;
    backgroundColor: number;
    padding: number;
    minWidth: number; // So the Typography noWrap works
  };
  toolbar: number;
  container: {
    display: string;
    flexWrap: string;
  };
  textField: {
    marginLeft: number;
    marginRight: number;
    width: number;
  };
  menu: {
    width: number;
  };
}
