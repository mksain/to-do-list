import './App.css';
import React, { useState } from "react";
import List from "./List";
function App() {

  const [inputList, setinputList] = useState("");

  const [Items, setItems] = useState([]);
  const [ItemsSecond, setItemsSecond] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList('');
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }

  const saveItems = (text) => {
    console.log("add");
    setItemsSecond((oldItems) => {
      return [...oldItems, text];
    });
  }


  return (
    <div className="main_div">
      <div className="row justify-content-center">
        <div className="col-sm-5">
          <div className="row">
            <div className="col pt-3 header">
              <div className="sub-header" style={{ background: "#b13c3cfa" }}>
                <div className="input-group mb-3">
                  <input type="text" value={inputList} onChange={itemEvent} className="form-control" placeholder="Enter a task" aria-label="Recipient's username" aria-describedby="button-addon2" style={{ "backgroundColor": "#b13c3cfa" }} />
                  <button onClick={listofItems} className="btn btn-outline-secondary" type="button" id="button-addon2"> + </button>
                </div>
              </div>
            </div>
            <ul className="list-group">
              {Items.map((itemval, index) => {
                return <List
                  key={index}
                  text={itemval}
                  id={index}
                  onSelect={deleteItems}
                  onSelectSecond={saveItems}
                />;
              })}
            </ul>

             <hr style={{height:"2px",marginTop:"10px",color:"white"}}/>
            <ul className="list-group" style={{marginTop: "20px"}}>
              {ItemsSecond.map((itemval, index) => {
                return (
                  <div className="list-item list-second">
                    <li className="list-group-item group-item-second">{itemval}</li>
                    <div>
                      <span style={{ marginRight: "15px", fontSize: "20px" }}><i className="far fa-trash-alt"
                         ></i></span>

                      <span style={{ color: "green", fontSize: "20px" }}><i class="fas fa-check-circle"></i></span>
                    </div>
                  </div>

                );
              })}


            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
