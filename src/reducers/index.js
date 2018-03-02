import { combineReducers } from 'redux';

import { vehiclesReducers } from './vehiclesReducers';
import { activeVehiclesReducers } from './activeVehiclesReducers';

export default combineReducers({
	vehicles:vehiclesReducers,
	activeVehicles:activeVehiclesReducers
});



