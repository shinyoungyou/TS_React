import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

// action creator = 액션 생성함수는, 액션을 만드는 함수입니다. 단순히 파라미터를 받아와서 액션 객체 형태로 만들어주죠.
// 이 함수는 단지 action 객체를 return 해주는 일만 한다.
export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => { // 이 dispatch는 도대체 어디서 받아오는 거야?
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })
    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      })
      const names = data.objects.map((result: any)=>{
        return result.package.name;
      })

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    } catch (err) {
      if (err instanceof Error){
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message
        })
      }
    }
  }
}