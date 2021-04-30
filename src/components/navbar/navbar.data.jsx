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
        title:'Tomorrow',
        path:'/tomorrow',
        icon:<FaAwe.FaStarHalfAlt/>,
        cName:'nav-text'
    },
    {
        title:'Unfinished Task',
        path:'/completed',
        icon:<FaAwe.FaStarHalf/>,
        cName:'nav-text'
    },
    {
        title:'Add Task',
        path:'/add-task',
        icon:<FaAwe.FaPlus/>,
        cName:'nav-text'
    }
]