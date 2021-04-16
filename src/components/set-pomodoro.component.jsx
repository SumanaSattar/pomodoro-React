import Button from './button.component'
import {useState , useContext} from 'react'
import {SettingContext} from '../context/setting-context'


const SetPomodoro = () => {
    const {updateExecute} = useContext(SettingContext);
    const [newTimer , setNewTimer] = useState({
        work:30,
        short:5,
        long:30,
        active:'work'
    })
    const handleChange=(e)=>{
        const {name,value} = e.target;
        switch (name) {
            case 'work':
                setNewTimer({...newTimer,work:parseInt(value)});
                break;
            case 'shortBreak':
                setNewTimer({...newTimer,short:parseInt(value)});
                break;
            case 'longBreak':
                setNewTimer({...newTimer,long:parseInt(value)});
                break;
            default:
                break;
        }
        console.log(newTimer)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newTimer)
        updateExecute(newTimer);

    }
    return ( 
        <div className="form-container">
            <form noValidate>
                <div className="input-label">
                    <span>Work</span>
                    <span>Short Break</span>
                    <span>Long Break</span>
                </div>
                <div className="input-wrapper"> 
                    <input className="input" name="work" onChange={handleChange} value={newTimer.work}/>
                    <input className="input" name="shortBreak" onChange={handleChange} value={newTimer.short}/>
                    <input className="input" name="longBreak" onChange={handleChange} value={newTimer.long}/>
                </div>
                 <Button title="Set Timer" clickHandle={handleSubmit}/>
            </form>
        </div>
     );
}
 
export default SetPomodoro;