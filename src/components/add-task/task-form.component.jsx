import { useContext,useState} from 'react'
import {SettingContext} from './../../context/setting-context'
import Calender from './calender.component'
import DatePicker from 'react-date-picker';

const TaskForm = () =>  {

      const [value, onChange] = useState(new Date());
      const today= value;
      const [arrValue,setArrValue] = useState([]);

      const[task,setTask]=useState('');

      const {addTask}=useContext(SettingContext);

      const submitHandler = (e) => {
          e.preventDefault();
          addTask(task);
          const array = value.split(' ');
        }
      const  changeHandler = (e) => {
        setTask(e.target.value);
        console.log(task);
          
  }

 
    return ( 
        <form onSubmit={submitHandler} className="form">
            <input
              type="text"
              placeholder="Add Task..."
            
              onChange={changeHandler}
              required
              className="task-input"
            />
             <div>
                <DatePicker
                  onChange={onChange}
                  value={value}
                />
                {console.log(value)}
                {console.log(today)}
              </div>
           
            <div className="buttons">
              <button type="submit" className="btn add-task-btn">
               Add
              </button>
              <button className="btn clear-btn" onClick="">
                Clear
              </button>
            </div>
            
      </form>
     );
   }

 
export default TaskForm;