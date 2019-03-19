import { combineReducers } from 'redux'
import loginReducer from './loginReducer'

export const Reducers = combineReducers({
	loggedUser: loginReducer
})