// 1) Import ReactDOM library
import ReactDOM from 'react-dom/client';
import UserSearch from './refs/UserSearch';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take a control of that root element
const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
  return (
    <div>
      <UserSearch/>
    </div>
  );
}

// 5) Show the component on the screen
root.render(<App/>)

// no longer support from React 18
// ReactDOM.render(<App/>, document.querySelector('#root'))