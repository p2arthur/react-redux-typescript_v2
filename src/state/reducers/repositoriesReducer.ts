import { repositoriesActionType } from '../interfaces/actions/actionsInterface';
import { repositoriesActionsTypes } from '../../action_types';

interface repositoriesStateInterface {
  isLoading: boolean;
  data: string[];
  error: string | null;
}

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const reducer = (
  state: repositoriesStateInterface = initialState,
  action: repositoriesActionType
) => {
  switch (action.type) {
    case repositoriesActionsTypes.SEARCH_REPOSITORIES:
      return { isLoading: true, data: [], error: null };
    case repositoriesActionsTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { isLoading: false, data: action.payload, error: null };
    case repositoriesActionsTypes.SEARCH_REPOSITORIES_ERROR:
      return { isLoading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
