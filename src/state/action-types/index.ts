export enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}
// action의 data type이 아니라, 
// action에서 action.type, action.payload 중에 action.type을 의미함. 