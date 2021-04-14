import React, { useContext, useEffect } from 'react';
import './App.css';
import Button from './components/button.component';
import CountDown from './components/countdown-animation.component';
import SetPomodoro from './components/set-pomodoro.component';
import { SettingContext } from './context/setting-context';


function App() {
  const {pomodoro,executing,setCurrentTimer,settingBtn,children,startAnimate,startTimer,pauseTimer,updateExecute} = useContext(SettingContext)
  useEffect(()=> updateExecute(executing) , [executing , startAnimate])
  return (
    <div className='App'>
      <h1>Pomodoro</h1>
      <p className='whiteFont'>Focus on being productive instead of busy</p>
      { pomodoro===0 ?
          <SetPomodoro/> :
       <>
          <ul className="labels">
            <li>
              <Button 
                 title='work'
                 activeClass={executing.active==='work' && 'activeLabel'}
                 clickHandle={()=>setCurrentTimer('work')}
              />
            </li>
          

        
            <li>
              <Button 
                 title='Short Break'
                 activeClass={executing.active==='short' && 'activeLabel'}
                 clickHandle={()=>setCurrentTimer('short')}
              />
            </li>
       

       
            <li>
              <Button 
                 title='Long Break'
                 activeClass={executing.active==='long' && 'activeLabel'}
                 clickHandle={()=>setCurrentTimer('long')}
              />
            </li>
        
          </ul>

          <Button title='Setting' clickHandle={settingBtn}/>

          <div className='time-container'>
            <div className='time-wrapper'>
                <CountDown key={pomodoro} timer={pomodoro} animate={startAnimate}>
                   {children}
               </CountDown>
            </div>
          </div>

          <div className='button-swrapper'>
            <Button title='Start' activeClass={!startAnimate && 'active'} clickHandle={startTimer}/>
            <Button title='Pause' activeClass={startAnimate && 'active'} clickHandle={pauseTimer}/>
          </div>
         
        </>
       }
       
    

    </div>
  );
}

export default App;
