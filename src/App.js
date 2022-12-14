import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert]= useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type 
    })
   
  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#152534';
      showAlert("Dark mode enabled","success")
      document.title="TextUtils- Dark"
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success")
    }
  }

  return (
  
   <>
    {/* <Router> */}
        <Navbar title="Tuhin's site" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about">
            <About/>
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading = "Enter the text to analyse" mode={mode}/>
          {/* </Route> */}
        {/* </Routes> */}
        </div>
    {/* </Router> */}
    </>
  
  );
}

export default App;
