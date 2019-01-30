import React from 'react';
import AddressDisplay from '../../AddressDisplay/components/AddressDisplay';
import AddressForm from '../../AddressForm/components/AddressForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddressTest from '../../AddressTest/components/AddressTest';

class Address extends React.Component {
  constructor() {
    super()
    this.state = {
      province: '',
      country: ''
    }
  }

  handleChange(event) {
    if (event.target.id === 'province') {
      this.setState({
        province: event.target.value
      });
    }
    else if (event.target.id === 'country') {
      this.setState({
        country: event.target.value
      });
    }

  }

  render() {
    return (
      <form>
        <Router>
          <div>
            <Link to="/test">Test</Link>
            <Route path="/test" component={AddressTest} />
          </div>
        </Router>
        <div className="form-row" onChange={this.handleChange.bind(this)}>
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
            <AddressForm
              province={this.state.province}
              onChange={this.handleChange}
            />
            <button type="submit" class="btn btn-primary mb-2">Save to XML</button>
          </div>

          <AddressDisplay
            province={this.state.province}
            country={this.state.country}
            onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default Address;