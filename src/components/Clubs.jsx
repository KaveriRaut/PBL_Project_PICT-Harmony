import React from "react";
import { Link } from "react-router-dom";


function Clubs(props) {
    return (
        <div className="facilities-col">
            <img className="icon" src={props.icon} alt="icon" width={30} height={180}></img>
            <span>{props.logo}</span>
            <h3> {props.name}</h3>
            <p>{props.content}</p>
            <p>{props.mail}</p>
            <p><a>{props.LinkToBio}</a></p>
        </div>
    )
}

export default Clubs;