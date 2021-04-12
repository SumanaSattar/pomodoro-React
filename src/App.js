import React from 'react';
import './App.css';
import SetPomodoro from './components/set-pomodoro.component';

function App() {
  return (
    <div className='App'>
      <h1>Pomodoro</h1>
      <p>Focus on being productive instead of busy</p>
      <SetPomodoro/>
    </div>
  );
}

export default App;
