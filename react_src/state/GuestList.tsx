import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setName('');
    setGuests([...guests, name]); // name이 바로 ''로 변하지는 않는다. 나도 잘 모르지만 setName('')하고 바로 밑 줄에 name하면 name이 바로 ''가 되는 게 아니다. 
  }

  // value={name} 이거 꼭 해줘야 sanitize됨
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map(guest=><li key={guest}>{guest}</li>)}
      </ul>
      <input value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  )
}

export default GuestList;