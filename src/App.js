import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ModeSwitcher from './components/ModeSwitcher';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     Routes
//   } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light"); // remember the convention to write mode, setMode.
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message ,
            type: type,
        })
        setTimeout(() => {
            setAlert(null)
        }, 1200);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "#042743";   
            showAlert("Dark mode has been enabled!", "Success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = "white"; 
            showAlert("Light mode has been enabled!", "Success");
        }
    }

    return (
        <>
        {/* <Router> */}
       
            <Navbar title="Textutils" about="About" mode={mode} />
         
            <div className='alert-container fixed-alert'>
            <Alert alert={alert}/> 
            </div>

        {/* <Routes>
          <Route path="/About" element={<About/>} />
          <Route path="/" element={} />
        </Routes> */}
        <TextForm heading="Enter your text to analyze" mode={mode}/>
        <ModeSwitcher toggleMode={toggleMode} mode={mode} />
        
        {/* </Router> */}
        </>
           
    );
}

export default App;
// in ln:34 alert is passed as a state variable .