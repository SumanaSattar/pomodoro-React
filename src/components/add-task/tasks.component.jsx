import * as FaAwe from "react-icons/fa"
import {useContext} from 'react'
import {SettingContext} from '../../context/setting-context'
import {withRouter} from 'react-router-dom'
const Tasks = ({task,history}) => {
    const {updatedTask,settingPlay,play,settingTaskPomodoro}=useContext(SettingContext);
 

    const playTask = () => {
        settingPlay(1);
        settingTaskPomodoro(task);
        history.push('/');
    }
    return ( 
        <div>
           <li className='list-item'>
            <span>{task.title}</span>
            <div className="buttons">
                <button className='task-btn' aria-label='delete button' onClick={()=> updatedTask(task.id)}><FaAwe.FaTrashAlt/></button>
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
 
export default withRouter(Tasks);