import axios from 'axios';
import { Dispatch } from 'react';
import { repositoriesActionsTypes } from '../../action_types';
import { repositoriesActionType } from '../interfaces/actions/actionsInterface';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<repositoriesActionType>) => {
    dispatch({ type: repositoriesActionsTypes.SEARCH_REPOSITORIES });
    console.log('dispatch');
    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        { params: { text: term } }
      );

      dispatch({
        type: repositoriesActionsTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: data.objects.map(
          (repositorie: any) => repositorie.package.name
        ),
      });
    } catch (error: any) {
      dispatch({
        type: repositoriesActionsTypes.SEARCH_REPOSITORIES_ERROR,
        payload: error,
      });
    }
  };
};
