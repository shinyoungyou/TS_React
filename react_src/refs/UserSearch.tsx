import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Angel', age: 20 },
  { name: 'Lucas', age: 20 }
]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  useEffect(()=>{
    if(!inputRef.current) return; // 이렇게 early return 을 해주면, 아랫줄에 에러가 안 남. 
    inputRef.current.focus(); // 사용자가 직접 input에 focus를 주지 않아도, 이 컴포넌트가 렌더링 되기만 하면 자동으로 알아서 focusing을 주는 기능
    // user can just immediately start typing and get some text inside there without having to first click into it
  }, [])

  const handleClick = () => {
    setName('');
    const foundUser = users.find((user)=>{
      return user.name === name;
    })
    setUser(foundUser);
  }

  return (
    <div>
      <h3>User Search</h3>
      <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleClick}>Find User</button>
      {user && user.name+" "+user.age}
    </div>
  )
}

export default UserSearch;