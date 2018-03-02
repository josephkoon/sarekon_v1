export function vehiclesReducers (state={vehicles:
[
	{name:'Vehicle 1', stockNumber:'1234',vin:'1234',make:'volkswagon',model:'jetta'},
	{name:'Vehicle 2', stockNumber:'1234',vin:'1234',make:'volkswagon',model:'jetta'},
	{name:'Vehicle 3', stockNumber:'1234',vin:'1234',make:'volkswagon',model:'jetta'},
	{name:'Vehicle 4', stockNumber:'1234',vin:'1234',make:'volkswagon',model:'jetta'}
]},action){
	switch(action.type){
    
	    //get all vehicles
	    case 'GET_VEHICLES':
	    return {...state,vehicles:[...state.vehicles]}

    	//add a vehicle
    	case 'ADD_VEHICLE':
	    	let vehicles = state.vehicles.concat(action.payload)
	    	return {vehicles}
	    	break

  }
  return state
}