import {useContext} from 'react'
import * as FaAwe from "react-icons/fa"
import { SettingContext } from '../context/setting-context';

const PlayTask = () => {
     const {taskPomodoro,updatedTask,settingPlay} = useContext(SettingContext)
     const closeTask = () => {
         settingPlay(0);
     }

     const doneHandled = ()=> {
        settingPlay(0);
        updatedTask(taskPomodoro.id)
     }
     
    return ( 
        <div className="play-container">
            <span>{taskPomodoro.title} </span>
            <div className="buttons">
                <button className='task-btn'  onClick={doneHandled} aria-label="done button"><FaAwe.FaCheck/></button>
                <button className='task-btn'  onClick={closeTask} aria-label="close task button"><FaAwe.FaTimes/></button>
            </div>
        </div>
     );
}
 
export default PlayTask;