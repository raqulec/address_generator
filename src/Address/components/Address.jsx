import React from 'react';
import AddressDisplay from '../../AddressDisplay/components/AddressDisplay';
import AddressForm from '../../AddressForm/components/AddressForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddressTest from '../../AddressTest/components/AddressTest';
var FileSaver = require('file-saver');

class Address extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      telephone: '',
      mobile: '',
      city: '',
      street: '',
      houseNo: '',
      houseExt: '',
      postcode: '',
      province: '',
      country: ''
    }
    this.saveToCsv = this.saveToCsv.bind(this);
  }

  saveToCsv() {
    var toCSV = `${this.state.firstName},${this.state.lastName},${this.state.telephone},${this.state.mobile},${this.state.city},${this.state.street},${this.state.houseNo},${this.state.houseExt},${this.state.postcode},${this.state.province},${this.state.country},`;

    var blob = new Blob([toCSV], { type: "text/csv;charset=utf-8" });
    FileSaver.saveAs(blob, "test.csv");
  }

  handleChange(event) {
    if (event.target.id === 'firstName') {
      this.setState({
        firstName: event.target.value
      });
    }
    else if (event.target.id === 'lastName') {
      this.setState({
        lastName: event.target.value
      });
    }
    else if (event.target.id === 'telephone') {
      this.setState({
        telephone: event.target.value
      });
    }
    else if (event.target.id === 'mobile') {
      this.setState({
        mobile: event.target.value
      });
    }
    else if (event.target.id === 'city') {
      this.setState({
        city: event.target.value
      });
    }
    else if (event.target.id === 'street') {
      this.setState({
        street: event.target.value
      });
    }
    else if (event.target.id === 'houseNo') {
      this.setState({
        houseNo: event.target.value
      });
    }
    else if (event.target.id === 'houseExt') {
      this.setState({
        houseExt: event.target.value
      });
    }
    else if (event.target.id === 'postcode') {
      this.setState({
        postcode: event.target.value
      });
    }
    else if (event.target.id === 'province') {
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
            <AddressForm />
            <button type="submit" class="btn btn-primary mb-2" onClick={this.saveToCsv}>Save to CSV</button>
          </div>

          <AddressDisplay
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            telephone={this.state.telephone}
            mobile={this.state.mobile}
            city={this.state.city}
            street={this.state.street}
            houseNo={this.state.houseNo}
            houseExt={this.state.houseExt}
            postcode={this.state.postcode}
            province={this.state.province}
            country={this.state.country} />
        </div>
      </form>
    );
  }
}

export default Address;