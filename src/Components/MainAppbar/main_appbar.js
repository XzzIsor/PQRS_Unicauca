import React from "react";
import "./main_appbar.css";
import {AiOutlineMenu} from "react-icons/ai";

function MainAppbar(props) {

  return (
    <div className="main-appbar" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
        <button className = "menu-button"
                onClick={() => {alert("Clicked")}}
        >
            <div className = "menu-button-icon">
                <AiOutlineMenu className="icon"/>
            </div>
        </button>

        <div className= "page-name"> {props.title} </div>
    </div>
  );
}

export default MainAppbar;