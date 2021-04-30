import TaskForm from "../components/add-task/task-form.component"
import TaskList from "../components/add-task/task-list.component"
import './add-task.page.css'


const AddTask = () => {
    return ( 
        <div>
            <div className="buttons">
                <TaskForm/>
                <div className='container center'>
                    <div className="app-wrapper">
                        <div className="main">
                            <TaskList/>
                        </div>
                    </div>
                </div>
            </div>
           
        </div> );
}
 
export default AddTask;