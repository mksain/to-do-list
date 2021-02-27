import React from "react";
import './App.css';
const List=(props)=>{


    return (
    <div className="list-item">
        <li className="list-group-item">{props.text}</li>
        <div>
        <span style={{marginRight:"15px",fontSize:"20px"}}><i className="far fa-trash-alt img-hover"
         onClick={()=>{
           props.onSelect(props.id);
        }} ></i></span>

        <span onClick={()=>{
            props.onSelectSecond(props.text);
            props.onSelect(props.id);
        }} style={{color:"green",fontSize:"20px"}}><i class="far fa-check-circle img-hover"></i></span>
        </div>
    </div>
   
    );
};

export default List;