import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

      <div class="app-box">
        <div class="app-header">
          <div class="app-content">


            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <div className="dropdown mb-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button class="dropdown-item" type="button">Action</button>
                      <button class="dropdown-item" type="button">Another action</button>
                      <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                  </div>
                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">First Name</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">Last Name</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">Telephone</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">Mobile</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>
                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">City</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">Street</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">House No.</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">House Ext.</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">Postcode</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">Province</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <div class="input-group input-group-lg mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-lg">Country</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>

                  <button type="submit" class="btn btn-primary mb-2">Save to XML</button>
                </div>

                <div className="form-group col-md-6">
                  <label for="exampleFormControlTextarea1" className="alert alert-primary mb-3">Output</label>
                  <textarea className="form-control mb-2" id="exampleFormControlTextarea1" rows="27" ></textarea>
                  <button type="button" class="btn btn-primary">Generate</button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
