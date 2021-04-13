import { useContext } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountDown = ({key=1,timer=20,animate=true,children}) => {
    return (
        <CountdownCircleTimer
           
                key={key}
                isPlaying={animate}
                duration={timer}
                colors={[
                ['#FE6F6B', 0.33],
                ['#FE6F6B', 0.33],
                ['#FE6F6B', 0.33],
                ]}
                strokeWidth={6}
                size={220}
                trailColor="#151932"
                onComplete={ () => {
                //stopAimate()
                }}
      >
        {children}
        </CountdownCircleTimer>
      );
}
 
export default CountDown;