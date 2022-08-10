import logo from './logo.svg';
import './App.css';
import ReadWriteCount from './components/ReadWriteCount';
import ReadOnlyCount from './components/ReadOnlyCount';

function App() {
  return (
    <div>
      <ReadOnlyCount />
      <ReadWriteCount />
    </div>
  );
}

export default App;
