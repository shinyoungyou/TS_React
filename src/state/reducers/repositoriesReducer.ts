interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[]
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES; // string인 건 당얀한 거고, type 안에 들어갈 값 자체가 'search_repositories_action'이 아니면 안 된다는 뜻.
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[]; // = data: string[]
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string; // = error: string
}

type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

const reducer = (state: RepositoriesState, action: Action) => {
  switch(action.type){
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
  
}

export default reducer;