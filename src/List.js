import React from "react";
import './App.css';
const List=(props)=>{


    return (
    <div className="list-item">
        <li className="list-group-item">{props.text}</li>
        <span><i className="far fa-trash-alt"
         onClick={()=>{
           props.onSelect(props.id);
        }} ></i></span>
    </div>
   
    );
};

export default List;