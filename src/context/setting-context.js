import { createContext, useState } from "react";

export const SettingContext = createContext();
const SettingContextProvider = (props) => {
    const [pomodoro,setPomodoro] = useState(0);
    const [executing,setExecuting] = useState({});
    const [startAnimate,setStartAnimate] = useState(false);
    return ( 
        <SettingContext.Provider value={{}}>
            {props.children}
        </SettingContext.Provider>
     );
}
 
export default SettingContextProvider;