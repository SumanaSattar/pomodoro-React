import TodayList from "../components/today-list.component"
import './add-task.page';
import {SettingContext} from '../context/setting-context'
import { useContext } from "react";

const TodayTask = () => {
    const {todayCheck}=useContext(SettingContext);
    return ( 
        <div>
            
            <div className='container'>
                    <h1>Today's Task</h1>
                    <div className="app-wrapper">
                        <div className="main">
                            <TodayList/>
                            { (!todayCheck)? <p>no task for today</p>:null}
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default TodayTask;