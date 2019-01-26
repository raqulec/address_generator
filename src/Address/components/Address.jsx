import React from 'react';
import AddressDisplay from '../../AddressDisplay/components/AddressDisplay';
import AddressForm from '../../AddressForm/components/AddressForm';

class Address extends React.Component {
  constructor() {
    super()
    this.state = {
      province: 'tes',
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      province: event.target.value
    });
  }

  render() {
    return (
      <form>
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
            />
            <button type="submit" class="btn btn-primary mb-2">Save to XML</button>
          </div>

          <AddressDisplay
          province={this.state.province}/>
        </div>
      </form>
    );
  }
}

export default Address;