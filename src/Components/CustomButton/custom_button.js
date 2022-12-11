import React, {useState } from "react";


  function CustomButton (props) {
    const text = props.text;

    const [buttonText] = useState(text);
    return (
      <button 
        className= "custom-button"
        onClick={props.onClick}>
        {buttonText}
      </button>
    );
  }
  export default CustomButton;