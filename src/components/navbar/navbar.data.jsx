import * as FaAwe from "react-icons/fa";
export  const NavBarData = [
    {
        title:'Home',
        path:'/',
        icon:<FaAwe.FaHome/>,
        cName:'nav-text'
    },
    {
        title:'Today',
        path:'/today',
        icon:<FaAwe.FaStar/>,
        cName:'nav-text'
    },
    {
        title:'Event',
        path:'/event',
        icon:<FaAwe.FaRegCalendar/>,
        cName:'nav-text'
    },
    {
        title:'Completed Task',
        path:'/completed',
        icon:<FaAwe.FaRegCalendarCheck/>,
        cName:'nav-text'
    },
    {
        title:'Add Task',
        path:'/add-task',
        icon:<FaAwe.FaPlus/>,
        cName:'nav-text'
    }
]