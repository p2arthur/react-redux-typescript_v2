interface repositoriesActionsInterface {
  search_repositories: { type: 'search_repositories' };
  search_repositories_success: {
    type: 'search_repositories_success';
    payload: string[];
  };
  search_repositories_error: {
    type: 'search_repositories_error';
    payload: string | null;
  };
}

export type repositoriesActionType =
  | repositoriesActionsInterface['search_repositories']
  | repositoriesActionsInterface['search_repositories_success']
  | repositoriesActionsInterface['search_repositories_error'];
