import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getVehicles } from '../actions/vehiclesActions'
import { addActiveVehicle } from '../actions/activeVehiclesActions'

class ObjectSelector extends Component {


	renderList(){
		return this.props.vehicles.map((vehicle) => {
			return (
				<li key={vehicle.name} onClick={() => this.props.addActiveVehicle(vehicle)} className='list-group-item'><h6><input type="checkbox" value="" /> {vehicle.name}</h6></li>
			)
		})
	}


    render() {
	    return ( 
	    	<div>
		    	<h6>Search [Go]</h6>
		    	<h6>Filter By Group [Go]</h6>
		    	<h6>Status [Red / Blue]</h6>
				<ul className='list-group'>
					{this.renderList()}
				</ul>
				<h6>Prev Page / Next Page</h6>
				<h6>Refresh</h6>
				<h6>1-5 of 150</h6>
			</div>
	    )
  	}	


}




function mapStateToProps(state){
	return {
		vehicles: state.vehicles.vehicles
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getVehicles: getVehicles, addActiveVehicle:addActiveVehicle }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ObjectSelector);


