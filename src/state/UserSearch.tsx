import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Angel', age: 20 },
  { name: 'Lucas', age: 20 }
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

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
      <input value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleClick}>Find User</button>
      {user && user.name+" "+user.age}
    </div>
  )
}

export default UserSearch;