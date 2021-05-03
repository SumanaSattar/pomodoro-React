import * as FaAwe from "react-icons/fa"
import {useContext} from 'react'
import {SettingContext} from '../../context/setting-context'
const Tasks = ({task}) => {
    const {updatedTask,settingPlay,play,settingTaskPomodoro}=useContext(SettingContext);
 

    const playTask = () => {
        settingPlay(1);
        settingTaskPomodoro(task);
    }
    return ( 
        <div>
           <li className='list-item'>
            <span>{task.title}</span>
            <div className="buttons">
                <button className='task-btn' aria-label='delete button' onClick={()=> updatedTask(task.key)}><FaAwe.FaTrashAlt/></button>
                <button className='task-btn' aria-label='play button' onClick={()=> playTask()}><FaAwe.FaPlayCircle/></button>
            </div>
           
        </li>
        <li className='list-item'>
            <span>{task.date}</span>
        </li>
        <hr></hr>  
        </div>
     );
}
 
export default Tasks;