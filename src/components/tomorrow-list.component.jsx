import {useContext} from 'react';
import {SettingContext} from '../context/setting-context'
import Tasks from './add-task/tasks.component'
const TomorrowList = () => {
    const {tasks , formattingDate,checkingTomorrowTask} = useContext(SettingContext);
    const today = formattingDate(new Date())
    const todaySplit =today.split('/');
  

    return ( 
        <div>
           <ul className="list">
               {tasks.map((task)=> 
                    {
                        const tomorrowSplit =task.date.split('/');

                        if((Number(tomorrowSplit[0])===Number(todaySplit[0])+1 ) && (Number(tomorrowSplit[1])===Number(todaySplit[1])) && (Number(tomorrowSplit[2])===Number(todaySplit[2])))
                        {
                            checkingTomorrowTask();
                            return <Tasks task={task} key={task.id}/>
                        }
                        
                    }
                )}
           </ul> 
        </div>
     );
}
 
export default TomorrowList;