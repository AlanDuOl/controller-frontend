import { createStore } from 'redux'
import reducer from '../reducers/reducer'

const defaultState = {
    user: {},
	filter: {}
}

function configureStore(state = defaultState){
    return createStore(reducer, state)
}

export default configureStore