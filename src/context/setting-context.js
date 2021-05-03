import { createContext, useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


export const SettingContext = createContext();


const SettingContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks,setTasks]=useState(initialState)
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks]
    )
   
    const [date,setDate]=useState([]);
    
    const [pomodoro,setPomodoro] = useState(0);
    const [executing,setExecuting] = useState({});
    const [startAnimate,setStartAnimate] = useState(false);
    const [todayCheck,setTodayCheck] = useState(false);
    const [tomorrowCheck,setTomorrowCheck] = useState(false);
    const [unfinishedCheck,setUnfinishedCheck] = useState(false);
    const [taskPomodoro,setTaskPomodoro] = useState([])
    const [play,setPlay] = useState(0);

    const addTask = (title,date) => {
       setTasks([{title:title,id:uuidv4(),date:date},...tasks])
       console.log(tasks.id)
    }
    const updatedTask = (key) => {
        setTasks(tasks.filter(num=>num.id !== key))
        console.log(setTasks(tasks.filter(num=>num.id !== key)))

    }
    const settingPlay = (val) => {
        setPlay(val);
    }
    const formattingDate = (dateObject) => {
        console.log(dateObject);
        const date =dateObject.getDate();
        const month = dateObject.getMonth();
        const year = dateObject.getFullYear();
        const formattedDate= date + "/"+ month+"/" + year
        return formattedDate;
        
    }
    const settingTaskPomodoro = (arr) => {
        setTaskPomodoro(arr)
    }
    const checkingTodayTask = () => {
        setTodayCheck(true);
    }
    const checkingTomorrowTask = () => {
        setTomorrowCheck(true);
    }
    const checkingUnfinishedTask = () => {
        setUnfinishedCheck(true);
    }
    function setCurrentTimer (activeState) {
        updateExecute({...executing,
                        active:activeState})
        setTimerTime(executing)
    }

    function startTimer() {
        setStartAnimate(true)
    }

    function pauseTimer() {
        setStartAnimate(false)
    }

    function stopTimer() {
        setStartAnimate(false)
    }

    const updateExecute =(update)=>{
        setExecuting(update);
        setTimerTime(update);
    }

    const settingBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    const setTimerTime = (evaluate) => {
        switch(evaluate.active) {
            case 'work':
              setPomodoro(evaluate.work)
              break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;    
            default:
                setPomodoro(0)
                break;
        }
    }

    const children = ({remainingTime}) => {
        const minutes = Math.floor(remainingTime/60)
        const seconds = remainingTime % 60

        return `${minutes}:${seconds}`
    }
    return ( 
        <SettingContext.Provider 
        value={{
            stopTimer,
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            tasks,
            todayCheck,
            tomorrowCheck,
            unfinishedCheck,
            date,
            play,
            taskPomodoro,
            settingTaskPomodoro,
            settingPlay,
            updatedTask,
            checkingTodayTask,
            checkingTomorrowTask,
            checkingUnfinishedTask,
            setCurrentTimer,
            startTimer,
            pauseTimer,
            stopTimer,
            settingBtn,
            addTask,
            formattingDate,
            children
        }}>
            {props.children}
        </SettingContext.Provider>
     );
}
 
export default SettingContextProvider;