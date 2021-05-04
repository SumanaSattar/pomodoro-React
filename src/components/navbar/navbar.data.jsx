import * as FaAwe from "react-icons/fa";
export  const NavBarData = [
    {
        title:'Home',
        path:'/',
        icon:<FaAwe.FaHome/>,
        cName:'nav-text',
        label:'button to home Page'
    },
    {
        title:'Today',
        path:'/today',
        icon:<FaAwe.FaStar/>,
        cName:'nav-text',
        label:'button to Today Task Page'
    },
    {
        title:'Tomorrow',
        path:'/tomorrow',
        icon:<FaAwe.FaStarHalfAlt/>,
        cName:'nav-text',
        label:'button to Tomorrow Task Page'
    },
    {
        title:'Unfinished Task',
        path:'/unfinished',
        icon:<FaAwe.FaStarHalf/>,
        cName:'nav-text',
        label:'button to unfinished task page'
    },
    {
        title:'Add Task',
        path:'/add-task',
        icon:<FaAwe.FaPlus/>,
        cName:'nav-text',
        label:'button to add task page'
    }
]