import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import image from '../../assets/image/Octocat.png';
import { addSearchValue, getRepositories } from '../../pages/Home/actions';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  logo: {
    width: 50,
    height: 50,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  const searchValue = useSelector(state => state.home.searchValue);
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    const { value } = event.target;
    dispatch(addSearchValue(value));
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(getRepositories());
  };


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            href={null}
            aria-label="Open drawer"
          >
            <img src={image} className={classes.logo} alt="logo" />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Show Repositories
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={submit}>
              <InputBase
                placeholder="Search by username…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={searchValue}
                onChange={onChangeHandler}
                inputProps={{ 'aria-label': 'Search users repositories' }}
              />
            </form>
          </div>
          <Button
            color="secondary"
            disabled={!searchValue}
            onClick={() => dispatch(getRepositories())}
          >
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
