import './add-task.page';
import {SettingContext} from '../context/setting-context'
import { useContext } from "react";
import UnFinishedList from '../components/unfinished-list.component';


const Unfinished= () => {
    const {unfinishedCheck}=useContext(SettingContext);
    return ( 
        <div> 
            <div className='container'>
                    <h1>Unfinished Task</h1>
                    <div className="app-wrapper">
                        <div className="main">
                            <UnFinishedList/>
                            { (!unfinishedCheck)? <p className='no-task-color'>no task unfinished</p>:null}
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Unfinished;