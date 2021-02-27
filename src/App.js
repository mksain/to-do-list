import './App.css';
import React,{useState} from "react";
import List from "./List";
function App() {

const [inputList,setinputList]=useState("");

const [Items,setItems]=useState([]);

const itemEvent = (event)=>
{
    setinputList(event.target.value);
};

const listofItems=()=>
{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setinputList('');
};

const deleteItems =(id)=>{
  console.log("deleted");

  setItems((oldItems)=>{
    return oldItems.filter((arrElement,index)=>{
      return index !== id;
    })
  })
}

  return (
    <div className="main_div">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="row">
            <div className="col pt-3 header">
              <div className="sub-header" style={{background:"#b13c3cfa"}}>
              <div className="input-group mb-3">
                <input type="text" value={inputList} onChange={itemEvent} className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" style={{ "backgroundColor": "#b13c3cfa" }} />
                <button onClick={listofItems} className="btn btn-outline-secondary" type="button" id="button-addon2"> + </button>
              </div>
              </div>
            </div>
            <ul className="list-group">
              {Items.map((itemval,index) =>{
                return <List 
                key={index}
                 text={itemval}
                 id={index}
                 onSelect={deleteItems}
                 />;
              })}
              
              
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
