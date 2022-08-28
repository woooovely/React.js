import logo from './logo.svg';
import './App.css';
import RecoilStarCount from './components/RecoilStarCount';
import React from 'react';

function App() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RecoilStarCount />
      </React.Suspense>
    </div>
  );
}

export default App;
