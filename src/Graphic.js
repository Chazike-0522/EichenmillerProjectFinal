import React, {useState} from "react"

function Graphic () {
const [fill, setFill] = useState('green');

const changeFill = (name) => {
    setFill(fill === 'green' ? 'blue' : 'green');
}

return (
<div>
    <div>
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill={fill} />
        </svg>  
    </div>
    <div className="bottom">
        <button type="button"  onClick={changeFill}>Click me!</button>
    </div>
</div>
)}

export default Graphic;