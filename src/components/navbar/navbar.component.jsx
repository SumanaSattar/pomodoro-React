import { useContext, useState } from "react"
import * as FaAwe from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {Link} from 'react-router-dom'
import {NavBarData} from './navbar.data'
import {SettingContext} from '../../context/setting-context'
import './navbar.styles.css'
const NavBar = () => {
    const {ariaLabel,settingAriaLabel}=useContext(SettingContext);
    const [sidebar,setSidebar] = useState(false)
    const showSidebar = () => {
        setSidebar(!sidebar)
        settingAriaLabel(ariaLabel);
    }
    return ( 
        <>
        <IconContext.Provider value={{color:'#060b26'}}>
          <div className='navbar'>
                <Link to="#" aria-expanded={ariaLabel}>
                    <FaAwe.FaBars onClick={showSidebar}/>
                </Link>
           </div>
           <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
               <ul className='nav-menu-items' onClick={showSidebar}>
                   <li className='navbar-toggle'>
                       <Link to='#' className='menu-bars' aria-label="close button for navigation bar">
                            <FaAwe.FaTimes/>
                       </Link>
                   </li>
                   {NavBarData.map((item,index)=>(
                       <li key ={index} className={item.cName}>
                           <Link to={item.path} aria-label={item.label}>
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