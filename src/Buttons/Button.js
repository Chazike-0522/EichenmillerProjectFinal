import React, {useState} from "react";
import "./Button.module.css";
import PictureArray from "../PictureArray";
import Graphic from "../Graphic";



function Button () {
    const [ind, setInd] = useState(0);            
    const [text, setText] = useState("");
    const [warning, setWarning] = useState('');
    const [inputValue, setInputValue] = useState('');

    const IndDown = (event) => {
        if (ind > 0){
        setInd(prevInd => prevInd -= 1);
        } else {
            setInd(2);
        }
    }

    const IndUp = (event) => {
        if (ind <2) {
        setInd(prevInd => prevInd += 1);
        } else {
            setInd(0);
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
        var Re = new RegExp(/^[\w|\s|!?.,:]+$/gm);
        var tester = Re.test(e.target.value);
        if (tester === true){
          setWarning("");
        } else if (tester === false) {
          setInputValue("");
          setText('');
          setWarning("*Text must be alphanumeric or punctuation");
        } 
    }

    const useInput = (event) => {
        setText(inputValue);
        event.preventDefault(); 
    }

return  (
    <div>
        <div>
            <PictureArray id={ind}/>
        </div>
        <h2>{text}</h2>
        <form onSubmit={useInput}>
            <label htmlFor="input">Please enter your text now:</label>
            <input type="text" id="input" name="input" className="input"  onChange={handleChange}></input>
            <div>
                <button className="Prev" type="button" onClick={IndDown}>Prev</button>
                <button className="Submit" type="submit">Submit</button>
                <button className="Next" type="button" onClick={IndUp}>Next</button>
            </div>
            <div>
                <h3>{warning}</h3>
            </div>
        </form>
        <Graphic />
    </div>
)
    }

export default Button;