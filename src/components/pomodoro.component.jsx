import { SettingContext } from '../context/setting-context';
import Button from './button.component';
import CountDown from './countdown-animation.component';
import React, { useContext, useEffect } from 'react';
import SetPomodoro from './set-pomodoro.component';
import PlayTask from './play-task.component';




function Pomodoro() {
    const {pomodoro,play,executing,setCurrentTimer,settingBtn,children,startAnimate,startTimer,pauseTimer,updateExecute,tasks} = useContext(SettingContext)
    useEffect(()=> updateExecute(executing) , [executing , startAnimate])

    return ( 
        <>
        <div className='container'>
          {(play === 1 ? <PlayTask task={tasks}/> : null)}
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
            </>}
        </div>       
        </>

     );
}
 
export default Pomodoro;