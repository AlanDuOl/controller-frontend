import { combineReducers } from 'redux'
import signinReducer from './signinReducer'
import homeFilterReducer from './homeFilterReducer'

export const Reducers = combineReducers({
	loggedUser: signinReducer,
	homeFilter: homeFilterReducer
})