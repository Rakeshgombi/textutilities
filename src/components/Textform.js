import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UPPERCASE", "success")
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleClearClick = () => {
    setText("")
    props.showAlert("Text has been cleared", "success")
  }

  const handleRemoveSpaceClick = () => {
    let analyzed = "";
    for (let i = 0; i < text.length; i++) {
      if (!(text[i - 1] === " " && text[i] === " ")) {
        analyzed += text[i];
      }
    }
    setText(analyzed)
    props.showAlert("Extra spaces are removed", "success")
  }

  const handleRemoveNewLineClick = () => {
    let analyzed = "";
    for (let i = 0; i < text.length; i++) {
      if (!(text[i] === "\n")) {
        analyzed += text[i]
      }
    }
    setText(analyzed)
    props.showAlert("New lines are removed", "success")
  }

  const handleCopyClick = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied to clipboard", "success")
  }

  const [text, setText] = useState('');

  return (
    <div>
      <div className="container mt-4 mb-3">
        <div className="my-3">
          <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
          <textarea className={`form-control border-primary bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap">

          <button type="submit" className="btn btn-primary m-1" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
          <button type="submit" className="btn btn-primary  m-1" onClick={handleLowClick}>convert to lowercase</button>
          <button type="submit" className="btn btn-primary m-1" onClick={handleRemoveSpaceClick}>Remove Extra Spaces</button>
          <button type="submit" className="btn btn-primary m-1" onClick={handleRemoveNewLineClick}>Remove New Line</button>
          <button type="submit" className="btn btn-primary  m-1" onClick={handleClearClick}>Clear text</button>
          <button type="submit" className="btn btn-primary  m-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        </div>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        {/* Fixed word count Bug */}
        <p>{text.length > 0 ? text.trim().split(" ").length : 0} words, {text.length} characters</p> 
        {/* Fixed minutes read Bug */}
        <p>{text.length > 0 ? 0.008 * text.trim().split(" ").length : 0} minutes read</p> 
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview it here"}</p>
      </div>
    </div>
  )
}
