import React,{useState} from 'react'

export default function Form(props) {
    const [text,setText]=useState("");

    const handleOnClicktoUpperCase=()=>{
        let upperText=text.toLocaleUpperCase();
        setText(upperText);
        
    }
    const handleOnClicktoLowerCase=()=>{
        let upperText=text.toLocaleLowerCase();
        setText(upperText);
        
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const msg = new SpeechSynthesisUtterance();
    const handleSpeech = (msg) => {
        msg.text = text
        window.speechSynthesis.speak(msg)
      }

    return (
        <div className=" my-5">
            <h1>{props.heading}</h1>
            <div className="container">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="16" value={text} onChange={handleOnChange} placeholder="enter text here"></textarea>
            </div>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleOnClicktoUpperCase}>Convert to UpperCase</button>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleOnClicktoLowerCase}>Convert to LowerCase</button>
            <button  className="btn btn-primary my-3 mx-3" onClick={() => handleSpeech(msg)}>Press to Audio</button>
        </div>
    )
}
