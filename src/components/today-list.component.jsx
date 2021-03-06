import {useContext} from 'react';
import {SettingContext} from '../context/setting-context'
import Tasks from './add-task/tasks.component'
const TodayList = () => {
    const {tasks , formattingDate,checkingTodayTask} = useContext(SettingContext);
    const today = formattingDate(new Date())
    

    return ( 
        <div>
           <ul className="list">
               {tasks.map((task)=> 
                    {
                        if(today===task.date){
                           
                            checkingTodayTask();
                            return <Tasks task={task} key={task.id}/>
                        }
                        
                    }
                )}
           </ul> 
        </div>
     );
}
 
export default TodayList;