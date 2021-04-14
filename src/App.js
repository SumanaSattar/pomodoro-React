import React, { useContext } from 'react';
import './App.css';
import CountDown from './components/countdown-animation.component';
import SetPomodoro from './components/set-pomodoro.component';
import { SettingContext } from './context/setting-context';


function App() {
  const {pomodoro} = useContext(SettingContext)
  return (
    <div className='App'>
      <h1>Pomodoro</h1>
      <p className='whiteFont'>Focus on being productive instead of busy</p>
      { pomodoro===0 ?
          <SetPomodoro/> :
       <>
          <h3>Testing</h3>
       </>
       }
       
        {/*<CountDown />*/}

    </div>
  );
}

export default App;
