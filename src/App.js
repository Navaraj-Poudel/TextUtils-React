import "./App.css";
import React, {useState} from "react";
import About from "./component/About";
import NavBar from "./component/NavBar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// import { findAllInRenderedTree } from "react-dom/test-utils";
const App= ()=> {
   const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
   const [alert, setAlert] =useState(null)
   
   const showAlert =(message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      },1500);
      
   }
   const removeBodyColor = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
   }
   const togglemode =(cls) => {
     removeBodyColor();
    document.body.classList.add('bg-'+ cls)
      if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#000106';
      showAlert("Dark mode has been enabled", "success")
      document.title ="TextUtils - Darkmode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='White';
      showAlert("Light mode has been enabled", "success")
      document.title ="TextUtils - Lightmode"
    }
   }
   const greenmode =() =>{
    if(mode ==='light') {
      setMode('green');
      document.body.style.backgroundColor ='green';
      showAlert("Dark mode has been enabled", "success")
      document.title ="TextUtils - Greenmode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success")
      document.title ="TextUtils - lightmode"
    }
  }

  return (
    <>
    <Router>
    <NavBar about="Aboutus" mode ={mode} togglemode = {togglemode} greenmode = {greenmode}  />
    <Alert  alert = {alert}/>
     <Routes>
      <Route path="about" element = {<About mode = {mode} />}></Route>
          <Route path="home" element = 
          { <TextForm heading="Try TextUtils- word counter,character counter,uppercase,lowercase" mode = {mode} showAlert = {showAlert}/>}>
            
          </Route>
       </Routes>

    <div className="container my-3">
    </div>
    </Router>
             {/* <NavBar about="Aboutus" mode ={mode} togglemode = {togglemode} greenmode = {greenmode}  />
               <Alert  alert = {alert}/>
                <About/>
               <TextForm heading="Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/> */}
    </>
  );
}

export default App;
