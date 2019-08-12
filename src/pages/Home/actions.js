import { createActions } from 'redux-actions';

import * as constants from './constants';

export const [
  {
    addNumber,
    getRepositories,
    addSearchValue,
    getRepositoriesSuccess,
    errorHandler,
    popapErrorChange,
    bounceChange,
  },
] = [
  createActions(
    constants.ADD_NUMBER,
    constants.GET_REPOSITORIES,
    constants.ADD_SEARCH_VALUE,
    constants.GET_REPOSITORIES_SUCCESS,
    constants.ERROR_HANDLER,
    constants.POPAP_ERROR_CHANGE,
    constants.BOUNCE_CHANGE,
  ),
];
