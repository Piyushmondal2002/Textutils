import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ModeSwitcher from './components/ModeSwitcher';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { HashRouter, Routes, Route } from 'react-router-dom'; // so we used HashRouter instead of Browser Router for the github problem .

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1200);
    };

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "#042743";
            showAlert("Dark mode has been enabled!", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled!", "success");
        }
    };

    return (
        <>
            <HashRouter>
                    <Navbar title="Textutils" about="About" mode={mode} />
                    
                    <div className='alert-container fixed-alert'>
                        <Alert alert={alert} />
                    </div>

                    <Routes>
                        <Route path="/About" element={<About mode={mode} />} />
                        <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} />} />
                    </Routes>

                    <ModeSwitcher toggleMode={toggleMode} mode={mode} /> {/*remember after writing {mode} give a space it's a typo which will make the mode undefined*/ }
            </HashRouter>

        </>
    );
}

export default App;
