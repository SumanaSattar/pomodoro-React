import { createContext, useState } from "react";

export const SettingContext = createContext();

const SettingContextProvider = (props) => {

    const [pomodoro,setPomodoro] = useState(0);
    const [executing,setExecuting] = useState({});
    const [startAnimate,setStartAnimate] = useState(false);

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
            setCurrentTimer,
            startTimer,
            pauseTimer,
            stopTimer,
            settingBtn,
            children
        }}>
            {props.children}
        </SettingContext.Provider>
     );
}
 
export default SettingContextProvider;