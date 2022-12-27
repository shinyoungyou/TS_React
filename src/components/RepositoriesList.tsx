import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch는 search함수의 인자로 들어가야 될 거 같은데, 오히려 dispatch가 search를 감싸고 있어서 혼란스러움
    // 이유는 지금 찾아보려 하지말자..
    dispatch(actionCreators.searchRepositories(term) as any); 
    console.log(dispatch(actionCreators.searchRepositories(term) as any));
    
    // 왜 . 을 찍어서 객체?처럼 연결? 하는 게 가능하냐?
    // 추측인데, export default searchRepositories; 로 한 게 아니라,
    // 그냥 export searchRepositories; 로 해서 그런 듯.
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e)=>setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList;