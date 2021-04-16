import {useState ,useEffect} from 'react'
import {firebase} from '../firebase'

const collatedTasks = ()=> {};
export const useTasks = selectProject => {
    const [tasks,setTasks]=useState([]);

    useEffect (()=>{
       const unsubscribe = firebase
       .firestore()
       .collection('tasks')
       .where('useId','==','SSUF2')

       unsubscribe = selectProject && !collatedTasksExist(selectedProject) ?
    },[]);

}