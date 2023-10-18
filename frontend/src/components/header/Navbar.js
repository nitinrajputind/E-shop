import React,{useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from './Searchbar'
import "./navbar.css"
import { Contextdata } from '../Context/Api'

const Navbar = () => {
    const data1 = useContext(Contextdata);
    const [menuOpen, setMenuOpen] = useState(false)



    const closeMenu = () =>{
        setMenuOpen(false)
        window.scrollTo(0, 0)
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
                        <NavLink className="nav-link active" aria-current="page"  to={"/"} onClick={closeMenu}>Home</NavLink>
                    </li>
                    
                    <li className="nav-item dropdown">

                        <NavLink className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mobile
                        </NavLink>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to={"/mobile/all"} onClick={closeMenu} >All</NavLink></li>
                            <li>
                                {
                                   data1 && data1.filter((item)=> item.ID ===1).map((item,index)=>{
                                        return(
                                            <NavLink className="dropdown-item" to={`/mobile/${item.brandname}`}  onClick={closeMenu} >Android</NavLink>
                                        )
                                    })
                                }
                            </li>
                            <li>
                                {
                                    data1 && data1.filter((item)=> item.ID ===2).map((item,index)=>{
                                        return(
                                            <NavLink className="dropdown-item" to={`/mobile/${item.brandname}`} onClick={closeMenu}>Iphone</NavLink>
                                        )
                                    })
                                }
                            </li>
                        </ul>
                    </li>
                    


                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page"  to={"/tablet"} onClick={closeMenu}>Tablet</NavLink>
                    </li>


                    
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Laptop
                        </NavLink>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink className="dropdown-item" to={"/laptop/all"} onClick={closeMenu} >All</NavLink></li>
                            <li>
                                {
                                   data1 && data1.filter((item)=> item.ID ===23).map((item,index)=>{
                                        return(
                                            <NavLink className="dropdown-item" to={`/laptop/${item.brandname}`}  onClick={closeMenu} >MAC</NavLink>
                                        )
                                    })
                                }
                            </li>
                            <li>
                                {
                                    data1 && data1.filter((item)=> item.ID ===32).map((item,index)=>{
                                        return(
                                            <NavLink className="dropdown-item" to={`/laptop/${item.brandname}`} onClick={closeMenu}>Windows</NavLink>
                                        )
                                    })
                                }
                            </li>
                        </ul>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/accessories"} onClick={closeMenu}>Accessories</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</>
    )
}

export default Navbar
