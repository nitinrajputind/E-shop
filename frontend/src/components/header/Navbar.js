import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from './Searchbar'
import "./navbar.css"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () =>{
        setMenuOpen(false)
    }

    console.log(menuOpen)
    return(
    <>
    <Searchbar/>
    <nav className="navbar navbar-expand-lg navbar-light background postion_fixed">
        <div class="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className={`collapse navbar-collapse ${menuOpen? "show" : ""}`} id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" href="#" onClick={closeMenu}>Home</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" onClick={closeMenu} >Mobile</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" onClick={closeMenu}>Tablet</NavLink>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Laptop
                        </NavLink>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" href="#">All</NavLink></li>
                            <li><NavLink className="dropdown-item" href="#">MAC</NavLink></li>
                            <li><NavLink className="dropdown-item" href="#">Windows</NavLink></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#" onClick={closeMenu}>Accessories</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</>
    )
}

export default Navbar
