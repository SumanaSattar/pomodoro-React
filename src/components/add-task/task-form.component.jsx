import { useContext,useState} from 'react'
import {SettingContext} from './../../context/setting-context'


import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";

import "react-datepicker/dist/react-datepicker.css";
import './add-task.styles.css'

const TaskForm = () =>  {

      const[task,setTask]=useState('');
     

      const {addTask,formattingDate}=useContext(SettingContext);
    

      const submitHandler = (e) => {
          e.preventDefault();
          addTask(task,formattingDate(startDate)); 
         
          
        }
      const  changeHandler = (e) => {
        setTask(e.target.value);
        console.log(task);
          
  }
  const [startDate, setStartDate] = useState(new Date());
 
    return ( 
        <form onSubmit={submitHandler} className="form">
            <h2>Add Task</h2>
            <input
              type="text"
              placeholder="Add Task..."
            
              onChange={changeHandler}
              required
              className="task-input"
            />
            <div>
            <DatePicker 
                selected={startDate} 
                onChange={date => setStartDate(date)} 
                minDate={subDays(new Date(), 0)} 
                inline
            />
                
            </div>
           
            <div className="buttons">
              <button type="submit" className="btn add-task-btn">
               Add
              </button>
            </div>
            
      </form>
     );
   }

 
export default TaskForm;