import logo from './logo.svg';
import useStore from './store';
import './App.css';

function App() {
  const { bears, increasePopulation, removeAllBears } = useStore(state => state)

  return (
    <div>
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove all</button>
    </div>
  )
}

export default App;
