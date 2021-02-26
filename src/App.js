import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main_div bg-success">
      <div className="row justify-content-center bg-danger">
        <div className="col-5 bg-secondary">
          <div className="row">
            <div className="col pt-3 header">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" style={{ "background-color": "#b13c3cfa" }} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"> + </button>
              </div>
            </div>
            <ul class="list-group">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
