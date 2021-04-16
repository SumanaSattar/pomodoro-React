import React, { useContext, useEffect } from 'react';
import './App.css';
import Button from './components/button.component';
import CountDown from './components/countdown-animation.component';
import NavBar from './components/navbar/navbar.component';
import SetPomodoro from './components/set-pomodoro.component';
import { SettingContext } from './context/setting-context';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


function App() {
  const {pomodoro,executing,setCurrentTimer,settingBtn,children,startAnimate,startTimer,pauseTimer,updateExecute} = useContext(SettingContext)
  useEffect(()=> updateExecute(executing) , [executing , startAnimate])
  return (
    <>
        <div>
        <Router>
              <NavBar/>
              <Switch>
                <Route exact path='/' ></Route>
              </Switch>
          </Router>
        </div>
        <div className='container'>
          <h1>Pomodoro</h1>
          <p className='whiteFont'>Focus on being productive instead of busy</p>
          { pomodoro===0 ?
              <SetPomodoro/> :
          <>
              <ul className="labels">
                <li>
                  
                  <Button 
                    title='work'
                    activeClass={executing.active==='work' && 'active-label'}
                    clickHandle={()=>setCurrentTimer('work')}
                  />
                </li>
              

            
                <li>
                  <Button 
                    title='Short Break'
                    activeClass={executing.active==='short' && 'active-label'}
                    clickHandle={()=>setCurrentTimer('short')}
                  />
                </li>
          

          
                <li>
                  <Button 
                    title='Long Break'
                    activeClass={executing.active==='long' && 'active-label'}
                    clickHandle={()=>setCurrentTimer('long')}
                  />
                </li>
            
              </ul>

              <Button title='Setting' clickHandle={settingBtn}/>

              <div className='timer-container'>
                <div className='time-wrapper'>
                    <CountDown key={pomodoro} timer={pomodoro} animate={startAnimate}>
                      {children}
                  </CountDown>
                </div>
              </div>

              <div className='button-wrapper'>
                <Button title='Start' activeClass={!startAnimate && 'active'} clickHandle={startTimer}/>
                <Button title='Pause' activeClass={startAnimate && 'active'} clickHandle={pauseTimer}/>
              </div>
            
            </>
          }
          
        

        </div>
    </>
  );
}

export default App;
