import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiFillYoutube , AiFillFacebook ,AiFillTwitterSquare , AiFillInstagram} from 'react-icons/ai';
import "./footer.css"

const Footer = () => {
  return (
    <div className='Footer_Contanier'>
        <div className="footerContanierUpper">

                <div className="left_Container_item hide">
                    <NavLink className="navbar-brand"><h2><span>E</span>Shop</h2></NavLink>
                    <p>Stay Home - Shop Online</p>
                    <p>Where you can always find something you want...</p>
                </div>

                <div className="left_Container_item">
                    <h2>Quick Links</h2>
                        <ul className="Quick">
                            <li><Link>Home</Link></li>
                            <li><Link>Mobile</Link></li>
                            <li><Link>Tablet</Link></li>
                            <li><Link>Laptop</Link></li>
                            <li><Link>Accessories</Link></li>
                        </ul>
                        
                 </div>

            <div className="rightcontainer">
            <div className="right_Container_item">
                <h2>Get Started</h2>
                <p>Get access to your full Info and knowledge.</p>
                <p><Link>Login Now</Link></p>
            </div>
            <div className="right_Container_item">
                <h2>Contact Us</h2>
                <p>info@Eshop.com</p>
                <div className="footer_icons">
                <AiFillYoutube className='youtube'/>
                <AiFillFacebook className='facebook'/>
                <AiFillTwitterSquare className='twitter'/>
                <AiFillInstagram className='Instagram'/>
                </div>
            </div>
            </div>



        </div>
        <div className="footerContanierLower">
            <h4>All @ Copy right are Reserved</h4>
        </div>
    </div>
  )
}

export default Footer
