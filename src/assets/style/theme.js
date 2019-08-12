import createMuiTheme from '@material-ui/core/es/styles/createMuiTheme';
import constants from './constants';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      ...constants.colors.primary,
      contrastText: 'black',
    },
    secondary: {
      ...constants.colors.secondary,
      contrastText: 'white',
    },
    background: {
      default: constants.colors.background,
      paper: constants.colors.background,
    },
  },
});
