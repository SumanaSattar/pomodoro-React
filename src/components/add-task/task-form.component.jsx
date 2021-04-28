import { useContext,useState} from 'react'
import {SettingContext} from './../../context/setting-context'
import Calender from './calender.component'

const TaskForm = () =>  {
      const[task,setTask]=useState('');
      const {addTask}=useContext(SettingContext);

      const submitHandler = (e) => {
          e.preventDefault();
          addTask(task);
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
            <Calender/>
           
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