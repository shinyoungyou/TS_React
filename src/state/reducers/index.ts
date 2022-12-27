import { combineReducers } from 'redux';
import repositoreiesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoreiesReducer
})

export default reducers;