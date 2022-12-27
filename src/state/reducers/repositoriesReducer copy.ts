interface RepositoriesState {
  loading: boolean;
  error: string | null; // error :true = string, error :false = null
  data: string[]
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES_ACTION;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS_ACTION;
  payload: string[]
  
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR_ACTION;
  payload: string;
}

type Action =  SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

enum ActionType {
  SEARCH_REPOSITORIES_ACTION = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS_ACTION = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR_ACTION = 'search_repositories_error'  
}

// reducer는 RepositoriesState 타입을 return 값으로 반환한다. 
const reducer = (state: RepositoriesState, action: Action ): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES_ACTION:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS_ACTION:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR_ACTION:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}

export default reducer;