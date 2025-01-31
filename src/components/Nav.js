import { BrowserRouter, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import BotList from "../pages/botList";



const Nav = ()=>{

    return (    
         <div className="Nav">
            <div className="Avator"></div>
                            <ul>
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='botList'>Bots</NavLink>
                                <NavLink to='Army'>Army</NavLink>
                            </ul>
            <div className="mode" ></div> 
         </div>
    );

}

export default Nav