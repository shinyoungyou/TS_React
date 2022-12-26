interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode; // React 18부터는 직접 interface에 annoate 해줘야 한다.
}

// 1. ts가 props의 type이 React Component인지 인지할 수 없다.
// 2. children을 props로 받고 싶다면 직접 interface에 annoate 해줘야 한다.
export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}

// 1. ts가 props의 type이 React Component인지 인지할 수 있다.
// 2. children을 props로 받고 싶다면, 
// 2-1. React 17까지는 그냥 interface에 선언 같은 거 할 필요없이 parent에서 보내주면 된다. 
// 2-2. React 18부터는 직접 interface에 annoate 해줘야 한다.
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}