import { ActionType } from '../action-types'

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

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

// action 의 data type을 interface에 정의하고, 
// action의 data type이 Action(req) 또는 SuccessAction(res) 또는 ErrorAction(res) 이 될 수 있다는 뜻.