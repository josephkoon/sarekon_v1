import React, { Component } from 'react';

class ObjectSelector extends Component {

  //vehicle data
  constructor(props){
    super(props)
    this.state = {
      vehicles:[
        {"name":"Vehicle 1", "stockNumber":"1234", "vin":"1234", "make":"volkwswagon","model":"jetta"},
        {"name":"Vehicle 2", "stockNumber":"1234", "vin":"1234", "make":"volkwswagon","model":"jetta"},
        {"name":"Vehicle 3", "stockNumber":"1234", "vin":"1234", "make":"volkwswagon","model":"jetta"},
        {"name":"Vehicle 4", "stockNumber":"1234", "vin":"1234", "make":"volkwswagon","model":"jetta"},
        {"name":"Vehicle 5", "stockNumber":"1234", "vin":"1234", "make":"volkwswagon","model":"jetta"}
      ]
    }
  }


  render() {

    //list of vehicles
    const vehicleItems = this.state.vehicles.map((vehicle) => {
      return (
         <div>
            <li class="list-group-item">
              <h6><input type="checkbox" value="" /> {vehicle.name}</h6>
            </li>
          </div>
        )
    })

    return (
      <div>
        <h6>Search [Go]</h6>
        <h6>Filter By Group [Go]</h6>
        <h6>Status [Red][Blue] Show [50]</h6>

        <div>
          <ul class="list-group">
            {vehicleItems}
          </ul>
        </div>

        <h6>Prev Page / Next Page</h6>
        <h6>Refresh</h6>
        <h6>1-50 of 100</h6>
      </div>
    )

  }
}

export default ObjectSelector;




