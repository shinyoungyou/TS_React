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
    inputRef.current.focus();
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