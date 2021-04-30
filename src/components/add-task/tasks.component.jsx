import * as FaAwe from "react-icons/fa"
const Tasks = ({task}) => {
    return ( 
        <div>
           <li className='list-item'>
            <span>{task.title}</span>
            <div className="buttons">
                <button className='task-btn' aria-label='delete button'><FaAwe.FaTrashAlt/></button>
                <button className='task-btn' aria-label='play button'><FaAwe.FaPlayCircle/></button>
            </div>
           
        </li>
        <li className='list-item'>
            <span>{task.date}</span>
        </li>
        <hr></hr>  
        </div>
     );
}
 
export default Tasks;