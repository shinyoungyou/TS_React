import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={()=>{console.log("Clicked!");
    }}>
      arbitary msg
    </ChildAsFC>
  )
}

export default Parent;