const TaskForm = () => {
    return ( 
        <form onSubmit="" className="form">
        <input
          type="text"
          placeholder="Add Task..."
        
          onChange=""
          required
          className="task-input"
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
           
          </button>
          <button className="btn clear-btn" onClick="">
            Clear
          </button>
        </div>
      </form>
     );
}
 
export default TaskForm;