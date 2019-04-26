import { createStore } from 'redux'
import signinReducer from '../reducers/signinReducer'

const defaultState = {
    user: {},
	filter: {}
}

function configureStore(state = defaultState){
    return createStore(signinReducer, state)
}

export default configureStore