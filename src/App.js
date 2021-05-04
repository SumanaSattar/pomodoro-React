import React, { useContext, useEffect } from 'react';
import './App.css';
import Button from './components/button.component';
import CountDown from './components/countdown-animation.component';
import NavBar from './components/navbar/navbar.component';
import SetPomodoro from './components/set-pomodoro.component';
import { SettingContext } from './context/setting-context';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AddTask from './pages/add-task.page';
import Pomodoro from './components/pomodoro.component';
import SettingContextProvider from './context/setting-context';
import TodayTask from './pages/today-task.page';
import Tomorrow from './pages/tomorrow.page';
import Unfinished from './pages/unfinished-task.page';



function App() {

  return (
    <>
        <div>
        
        <Router>
             
              <NavBar/>
              <Switch>
                <Route exact path='/' ><Pomodoro/></Route>
                <Route  path='/add-task' ><AddTask/></Route>
                <Route  path='/today' ><TodayTask/></Route>
                <Route  path='/tomorrow' ><Tomorrow/></Route>
                <Route  path='/unfinished' ><Unfinished/></Route>
              </Switch>
          </Router>
        </div>
        
    </>
  );
}

export default App;
