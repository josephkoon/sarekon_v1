
//add a vehicle
export function addVehicle(vehicle){
	return {
		type:'ADD_VEHICLE',
		payload:vehicle
	}
}


export function getVehicles(){
	return {
		type:'GET_VEHICLES'
	}
}