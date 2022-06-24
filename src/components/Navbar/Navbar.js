import './Navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-mainbg">
          <NavLink className="navbar-brand navbar-logo" to="/" exact> Sammy@pp</NavLink>
          <button
               calssName="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               area-controls="navbarSupportedContent"
               area-expanded="false"
               area-label="Toggle Navigation" >
              <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ms-auto">
                <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"> </div>         
                </div>
                        <li>
                   <NavLink className="nav-link" to="/" exact>
                      <i className="fas fa-tachometer-alt">
                      </i>Home
                   </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/about" exact>
                     <i className="far fa-address-book">
                     </i>About
                    </NavLink>
                </li>

                <li className="nav-item">
                   <NavLink className="nav-link" to="/testimonial" exact>
                      <i className="far fa-chart-bar">
                      </i>Testimonail
                   </NavLink>
                </li>
                <li className="nav-item">
                   <NavLink className="nav-link" to="/contact">
                      <i className="far fa-copy">
                      </i>Contact Us
                   </NavLink>
                </li>
             </ul>
          </div> 

       </nav>
    )
}

export default Navbar
