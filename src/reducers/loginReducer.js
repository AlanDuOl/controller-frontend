
const initialState = {
	user: {}
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'setUser':
			return {
				...state,
				user: action.newUser
			}
		default:
			return state
	}
}