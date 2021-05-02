import TodayList from "../components/today-list.component"
import './add-task.page';
import {SettingContext} from '../context/setting-context'
import { useContext } from "react";
import TomorrowList from "../components/tomorrow-list.component";

const Tomorrow= () => {
    const {tomorrowCheck}=useContext(SettingContext);
    return ( 
        <div>
            
            <div className='container'>
                    <h1>Tomorrow Task</h1>
                    <div className="app-wrapper">
                        <div className="main">
                            <TomorrowList/>
                            { (!tomorrowCheck)? <p>no task for tomorrow</p>:null}
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Tomorrow;