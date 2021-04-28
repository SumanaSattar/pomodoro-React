import {Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './add-task.styles.css'
class Calender extends Component  {
    constructor(props) {
      super(props);
      this.handleDayClick = this.handleDayClick.bind(this);
      this.state = {
        selectedDays: [],
      };
    }
    handleDayClick(day, { selected }) {
        const selectedDays = this.state.selectedDays.concat();
        if (selected) {
          const selectedIndex = selectedDays.findIndex(selectedDay =>
            DateUtils.isSameDay(selectedDay, day)
          );
          selectedDays.splice(selectedIndex, 1);
        } else {
          selectedDays.push(day);
        }
        this.setState({ selectedDays });
        console.log(selectedDays);
      }
       render () {
        return ( 
            <DayPicker className='.DayPicker-Day .DayPicker-Day--selected'
            selectedDays={this.state.selectedDays}
            onDayClick={this.handleDayClick}
         />
        )
       }
    }
    export default Calender;   