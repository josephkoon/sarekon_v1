import React, { Component } from 'react';

class ObjectDetail extends Component {

  render() {

    return (
    <div>
      <div class='col-xs-4'>
      	<h6>Customer</h6>
      	<h6>First Name</h6>
      	<h6>Last Name</h6>
      	<h6>Address</h6>
      	<h6>Phone</h6>
      	<h6>Email</h6>
      </div>
      <div class='col-xs-4'>
      	<h6>Vehicle</h6>
      	<h6>Display Name</h6>
      	<h6>Stock Number</h6>
      	<h6>VIN</h6>
      	<h6>Make</h6>
      	<h6>Model</h6>
      </div>
      <div class='col-xs-4'>
      	<h6>Device</h6>
      	<h6>Serial</h6>
      	<h6>Group</h6>
      	<h6>Status</h6>
      	<h6>Position</h6>
      	<h6>Last Known Location</h6>
      </div>
    </div>
    )

  }
}

export default ObjectDetail;
