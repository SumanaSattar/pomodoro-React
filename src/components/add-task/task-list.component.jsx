import {useContext} from 'react';
import {SettingContext} from './../../context/setting-context'
import Tasks from './tasks.component'
const TaskList = () => {
    const {tasks} = useContext(SettingContext);
    return ( 
        <div>
            {tasks.length ?
                    <ul className="list">
                        {tasks.map((task)=> 
                                {return <Tasks task={task} key={task.id}/>}
                            )}
                    </ul> : <p> No Task</p>}
        </div>
     );
}
 
export default TaskList;