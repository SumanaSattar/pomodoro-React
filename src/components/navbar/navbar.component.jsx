import { useState } from "react"
import * as FaAwe from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {Link} from 'react-router-dom'
import {NavBarData} from './navbar.data'
import './navbar.styles.css'
const NavBar = () => {
    const [sidebar,setSidebar] = useState(false)
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return ( 
        <>
        <IconContext.Provider value={{color:'#060b26'}}>
          <div className='navbar'>
                <Link to="#">
                    <FaAwe.FaBars onClick={showSidebar}/>
                </Link>
           </div>
           <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
               <ul className='nav-menu-items' onClick={showSidebar}>
                   <li className='navbar-toggle'>
                       <Link to='#' className='menu-bars'>
                            <FaAwe.FaTimes/>
                       </Link>
                   </li>
                   {NavBarData.map((item,index)=>(
                       <li key ={index} className={item.cName}>
                           <Link to={item.path}>
                               {item.icon} <span>{item.title}</span> 
                           </Link>
                       </li>
                   ))}
               </ul>
           </nav>
        </IconContext.Provider>
        </>
     );
}
 
export default NavBar;