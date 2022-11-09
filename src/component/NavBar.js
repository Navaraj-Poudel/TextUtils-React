import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style = {{ color:props.mode==='light'?'black':'white'}}>{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style = {{ color:props.mode==='light'?'black':'white'}}>Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="about" style = {{ color:props.mode==='light'?'black':'white'}}>{props.about}</a>
          </li> */}
        </ul>
          <div class={`form-check form-switch text-${props.mode==='light'?'green':'light'}`}>
            <input class="form-check-input" onClick={props.greenmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Enable Green Mode ......</label>
         </div>
        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input class="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
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