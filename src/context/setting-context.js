import { render } from "@testing-library/react";
import { createContext, useState } from "react";


export const SettingContext = createContext();

const SettingContextProvider = (props) => {
    const [tasks,setTasks]=useState([
        {title:'read book',key:1,date:'1/4/2021'},
        {title:'run for an hour',key:2,date:'5/4/2021'},
        {title:'code for an hour',key:3,date:'4/4/2021'},
    ])
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
       setTasks([{title:title,id:4,date:date},...tasks])
    }
    const updatedTask = (key) => {
        setTasks(tasks.filter(num=>num.key !== key))
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