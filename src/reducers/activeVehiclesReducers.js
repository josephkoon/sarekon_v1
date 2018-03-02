export function activeVehiclesReducers (state = {activeVehicles:
[
	{name:'Vehicle 1', stockNumber:'1234',vin:'1234',make:'volkswagon',model:'jetta'}
]}, action){
	switch(action.type){

    	//add a vehicle
    	case 'ADD_ACTIVE_VEHICLE':
	    	let activeVehicles = state.activeVehicles.concat(action.payload)
	    	return {activeVehicles}
	    	break
			
	}
	return state
}


