import React, { Component } from 'react';
import { connect } from 'react-redux'

class ObjectDetail extends Component {

	renderList(){
		return this.props.activeVehicles.map((vehicle) => {
			return (
				<div key={vehicle.name} className='col-xs-4'>
					<h6>Name: {vehicle.name}</h6>
					<h6>Stock Number: {vehicle.stockNumber}</h6>
					<h6>Vin: {vehicle.vin}</h6>
					<h6>Make:{vehicle.make}</h6>
					<h6>Model: {vehicle.model}</h6>
				</div>
			)
		})
	}

    render() {
	    return ( 
			<div>
				{this.renderList()}
			</div>
	    )
  	}

}


function mapStateToProps(state){
	return {
		activeVehicles: state.activeVehicles.activeVehicles
	}
}


export default connect(mapStateToProps)(ObjectDetail);