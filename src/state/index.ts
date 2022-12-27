export * from './store'; // 여기 안에 newState가 있음 = 가져와야 되는 것 
export * as actionCreators from './action-creators' // 여기 안에 있는 함수를 improt 하고, 그 함수를 호출해서 새로운 state값을 store로 보냄.