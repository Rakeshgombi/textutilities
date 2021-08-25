import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({ msg: message, type: type })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const [mode, setMode] = useState('light') // whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.background = "#fff";
      document.body.style.color = "#000";
      showAlert("Light mode has been enabled", "success")
    } else {
      setMode("dark")
      document.body.style.background = "#222";
      document.body.style.color = "#fff";
      showAlert("dark mode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="continer">
        <Textform heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />

      </div>
    </>
  );
}

export default App;
