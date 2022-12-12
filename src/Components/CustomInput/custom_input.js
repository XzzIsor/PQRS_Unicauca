import React from "react";
import "./custom_input.css";

function CustomInput(props) {

    

    return (
        <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            readOnly={props.readOnly}
        />
    );
}

function CustomInputLarge(props) {
    return (
        <input
            className="input-large"
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            readOnly={props.readOnly}
        />
    );
}

function CustomInputSubmit(props) {
    return (
        <input
            className="input-submit"
            type={props.type}
            value={props.value}
            onClick={props.onClick}
        />
    );
}


export {CustomInput};
export {CustomInputLarge};
export {CustomInputSubmit};