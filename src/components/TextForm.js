import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper Case Button was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }
    const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case", "success")
    }
    const handleClear = () =>{
      let newText =""
      setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = () =>{
      var text= document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!", "success")
    }
    const extraSpace = () =>{
      let newText = text.replace("  "," ")
      setText(newText)

    }

    const[text, setText ]=useState("Enter text here")

  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="form-group">
      {/* <label for="myBox">Example textarea</label> */}
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'dark'}} id="myBox" rows="5"></textarea>
    </div>
    <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Change to UPPER_CASE</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Change to LOWER_CASE</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear text area</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
    <button className="btn btn-primary my-2 mx-2" onClick={extraSpace}>Remove extra spaces</button>
    
      <div className='container my-2' style={{color: props.mode==='dark'?'white':'dark'}}>
        <p>Number of words are {text.split(" ").length}</p>
        <p>Number of characters are {text.length-1}</p>

        <h3>Preview</h3>
        <p>{text.lenth>0? text:"Enter something to see the preview here"}</p>
      </div>
    </div>
    
  )
}
