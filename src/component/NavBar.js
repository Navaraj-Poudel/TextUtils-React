import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand " to="home" style = {{ color:props.mode==='light'?'black':'white'}}>{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active.rgba-blue-strong" aria-current="page" to="home" style = {{ color:props.mode==='light'?'black':'white'}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about" style = {{ color:props.mode==='light'?'black':'white'}}>{props.about}</Link>
          </li>
        </ul>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('primary')} }  ></div>
          <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('success')}}  ></div>
          <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('warning')}}  ></div>
          <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('danger')}}  ></div>
          <div className="bg-dark rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('dark')}}  ></div>
          <div className="bg-light rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.togglemode('light')}}  ></div>
        </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'green':'light'}`}>
            <input className="form-check-input" onClick={props.greenmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode ......</label>
         </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{props.togglemode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
         </div>
      </div>
    </div>
  </nav>
  )
}
NavBar.propTypes = { title : PropTypes.string,
    about:PropTypes.string}

    // Specifies the default values for props:
NavBar.defaultProps = {
    title: 'NAPO'
  };

export default NavBar