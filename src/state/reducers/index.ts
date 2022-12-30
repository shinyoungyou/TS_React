import { combineReducers } from "redux";
import repositoreiesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoreiesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>; // ReturnType은 interface인가?
// interface에다가 <>이렇게 해서 type정의해도 되나? interface가 맞긴 한가?
// "typeof reducers"의 return 값이 type 형식으로 나오니까 <>안에 "typeof reducers"를 넣는 게 맞음
// ReturnType은 type을 e.g. redux에서 (어딘가로부터) 가져오기위한 interface이다.

// 왜 이름이 RootState냐? reducer"s" 니까 reducer들을 모아 둔 거란말임?
// 그래서 reducers가 reducer들의 root라고 할 수 있단 말임?
// 근데 reducer의 존재 의미가: previousState -> reducer -> newState 이거잖음?

// 그니까 store(정적)보다는 reducer(동적)가 더 진정한 state라고 할 수 있지.
// 왜냐면 store안에 있는 state는 계속 바뀌는데, reducer는 이전 state와 새로운 state가 계속 업데이트가 되니까?
