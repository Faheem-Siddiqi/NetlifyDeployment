import React from 'react'
import "../css/Nav.css"
import icon from "../assets/coingenie.png"
export default function 
() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-transparent" style={{borderBottom:"1px solid white"}}>
  <div className="container-fluid">
   <img className='mx-5' width=" 5.5%"src={icon} alt="" />
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="#">
            Link
          </a>
        </li>
      </ul>
      <button className="btn normalBtn" type="submit">
         REWARDS
        </button> <button className="btn heroSectionBtn1" style={{fontWeight:"bold",fontSize:"small"}} type="submit">
          Connect Wallet
        </button>
    </div>
  </div>
</nav>
    </div>
  )
}
