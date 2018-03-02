import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getVehicles } from '../actions/vehiclesActions'
import { addActiveVehicle } from '../actions/activeVehiclesActions'

class ObjectSelector extends Component {


	renderList(){
		return this.props.vehicles.map((vehicle) => {
			return (
				<li onClick={() => this.props.addActiveVehicle(vehicle)} className='list-group-item'><h6>{vehicle.name}</h6></li>
			)
		})
	}


    render() {
	    return ( 
			<ul className='list-group'>
				{this.renderList()}
			</ul>
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


