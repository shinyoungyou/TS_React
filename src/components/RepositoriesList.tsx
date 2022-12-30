import { useState } from 'react';
import { useActions } from '../hooks/useActions'; // 보내기
import { useTypedSelector } from '../hooks/useTypedSelector'; // 가져오기

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchRepositories } = useActions();
  // { searchRepositories: dispatch(searchRepositories) }

  const { data, loading, error } = useTypedSelector((state)=>state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // bindActionCreators를 쓰지 않고 쌩으로 짰을 떄: 
    // dispatch(actionCreators.searchRepositories(term) as any);

    // bindActionCreators를 썼을 때:
    searchRepositories(term); // return 값 = dispatch({ type: ActionType.SEARCH_REPOSITORIES })
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