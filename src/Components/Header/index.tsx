import { NavLink } from 'react-router-dom'
import './index.css'

export default function Header(){

    return (
        <header>
        <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home </NavLink></li> 
                    <li><NavLink to="/aboutus">about us</NavLink></li> 
                    <li><NavLink to="/contactus">contact us</NavLink></li> 
                    <li><NavLink to="/courses">courses</NavLink></li> 
                </ul>     
           </nav>   
        <div className="buttons">
            <button>sign in</button>
            <button>sign up</button>
        </div>
        </header>
    )
}