import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg fw-bold py-4 ">
  <div className="container">
    <NavLink className="navbar-brand text-white fs-3" to="/Home">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fs-6">
        <li className="nav-item">
          <NavLink className="nav-link text-white"  to="/About">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Contact">CONTACT</NavLink>
        </li>
   
      </ul>
    </div>
  </div>
</nav>
    
    
    
    </>


  )
}
