import React from "react";
import "./custom_input.css";

function CustomInput(props) {

    

    return (
        <div className="custom-input">
        <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            readOnly={props.readOnly}
        />
        </div>
    );
}

function CustomInputLarge(props) {
    return (
        <div className="custom-input-large">
        <input
            className="input-large"
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            readOnly={props.readOnly}
        />
        </div>
    );
}

function CustomInputSubmit(props) {
    return (
        <div className="custom-input-submit">
        <input
            className="input-submit"
            type={props.type}
            value={props.value}
            onClick={props.onClick}
        />
        </div>
    );
}


export {CustomInput};
export {CustomInputLarge};
export {CustomInputSubmit};