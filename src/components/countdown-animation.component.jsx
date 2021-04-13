import { useContext } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from '../context/setting-context';



const CountDown = ({key=1,timer=20,animate=true,children}) => {
    const {stopTimer}=useContext(SettingContext)
    return (
        <CountdownCircleTimer
           
                key={key}
                isPlaying={animate}
                duration={timer}
                colors={[
                ['#FFFFFF', 0.33],
                ['#FFFFFF', 0.33],
                ['#FFFFFF', 0.33],
                ]}
                strokeWidth={6}
                size={220}
                trailColor="#151932"
                onComplete={ () => {
                stopTimer()
                }}
      >
        {children}
        </CountdownCircleTimer>
      );
}
 
export default CountDown;