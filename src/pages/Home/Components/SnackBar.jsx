import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MySnackbarContentWrapper from '../../../components/Snackbar';
import { popapErrorChange } from '../actions';


const SnackMenu = () => {
  const { error, popApp } = useSelector(state => ({
    error: state.home.error,
    popApp: state.home.popApp,
  }));
  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={popApp}
      autoHideDuration={6000}
      onClose={() => dispatch(popapErrorChange(false))}
    >
      <MySnackbarContentWrapper
        onClose={() => dispatch(popapErrorChange(false))}
        variant="error"
        message={error}
      />
    </Snackbar>
  );
};
export default SnackMenu;
