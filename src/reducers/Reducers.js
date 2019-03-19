import { combineReducers } from 'redux'
import signinReducer from './signinReducer'

export const Reducers = combineReducers({
	loggedUser: signinReducer
})